import type { Event } from '@tauri-apps/api/event'
import type { IncompatibleVersion } from '../src/store/modules/preinstall'
import { beforeEach, describe, expect, it, vi } from 'vitest'

// 版本兼容性拒绝的往返：后端把拒绝清单挂在错误串上（Tauri 命令的错误通道只有字符串），
// store 负责解出授权清单、授权后再重跑安装。这里锁定三件事：载荷被解成可授权项而不是
// 安装失败；非该前缀的失败仍是失败；解析不了时宁可报失败也不假装可授权。

const BLOCKED: IncompatibleVersion[] = [
  { name: 'dsh-better-sidebar', version: '0.22.1', runtime_version: '0.2.0-rc.1' },
  { name: 'dsh-rewind-plugin', version: '0.14.0', runtime_version: '0.2.0-rc.1' },
]

const { eventListeners, invoke } = vi.hoisted(() => ({
  eventListeners: new Map<string, (event: Event<unknown>) => void>(),
  invoke: vi.fn(),
}))

vi.mock('@tauri-apps/api/core', () => ({ invoke }))
vi.mock('@tauri-apps/api/event', () => ({
  listen: vi.fn(async (event: string, callback: (payload: Event<unknown>) => void) => {
    eventListeners.set(event, callback)
    return vi.fn()
  }),
}))
vi.mock('@/config/client', () => ({ queryClient: { invalidateQueries: vi.fn() } }))
vi.mock('../src/store/modules/harness-updater', () => ({
  harnessUpdater: { checkForUpdate: vi.fn() },
}))

const { preinstall } = await import('../src/store/modules/preinstall')

beforeEach(() => {
  eventListeners.clear()
  invoke.mockReset()
  preinstall.error = ''
  preinstall.incompatible = []
  preinstall.installing = false
  preinstall.logs = []
})

describe('preinstall version-incompatibility refusal', () => {
  it('exposes the refused exact versions as authorizable entries instead of a failure', async () => {
    invoke.mockRejectedValue(`PLUGIN_VERSION_INCOMPATIBLE: ${JSON.stringify(BLOCKED)}`)

    await preinstall.confirm({ installIds: ['dsh-better-sidebar', 'dsh-rewind-plugin'] })

    expect(preinstall.incompatible).toEqual(BLOCKED)
    expect(preinstall.error).toBe('')
    expect(preinstall.installing).toBe(false)
  })

  it('keeps a malformed refusal payload as a plain install failure', async () => {
    invoke.mockRejectedValue('PLUGIN_VERSION_INCOMPATIBLE: not-json')

    await preinstall.confirm({ installIds: ['dsh-better-sidebar'] })

    expect(preinstall.incompatible).toEqual([])
    expect(preinstall.error).toBe('PLUGIN_VERSION_INCOMPATIBLE: not-json')
  })

  it('keeps an ordinary install failure as a plain install failure', async () => {
    invoke.mockRejectedValue('PREINSTALL_FAILED: dsh plugin exited with code 1')

    await preinstall.confirm({ installIds: ['dsh-better-sidebar'] })

    expect(preinstall.incompatible).toEqual([])
    expect(preinstall.error).toBe('PREINSTALL_FAILED: dsh plugin exited with code 1')
  })
})

describe('preinstall version-exemption grant', () => {
  it('grants exactly the checked entries and clears the pending list', async () => {
    preinstall.incompatible = BLOCKED
    invoke.mockResolvedValue(undefined)

    const granted = await preinstall.allowIncompatible([BLOCKED[0]])

    expect(granted).toBe(true)
    expect(invoke).toHaveBeenCalledWith('allow_plugin_versions', { versions: [BLOCKED[0]] })
    expect(preinstall.incompatible).toEqual([])
  })

  it('does not touch the backend when nothing is checked', async () => {
    preinstall.incompatible = BLOCKED

    const granted = await preinstall.allowIncompatible([])

    expect(granted).toBe(false)
    expect(invoke).not.toHaveBeenCalled()
    expect(preinstall.incompatible).toEqual(BLOCKED)
  })

  it('reports a failed grant as an install failure with the pending list cleared', async () => {
    preinstall.incompatible = BLOCKED
    invoke.mockRejectedValue('PLUGIN_EXEMPTION_FAILED: dsh-better-sidebar@0.22.1: dsh plugin exited with code 1')

    const granted = await preinstall.allowIncompatible(BLOCKED)

    expect(granted).toBe(false)
    expect(preinstall.incompatible).toEqual([])
    expect(preinstall.error).toBe('PLUGIN_EXEMPTION_FAILED: dsh-better-sidebar@0.22.1: dsh plugin exited with code 1')
  })

  it('drops a stale pending list when the wizard is reopened', async () => {
    preinstall.incompatible = BLOCKED
    invoke.mockResolvedValue([])

    await preinstall.open()

    expect(preinstall.incompatible).toEqual([])
  })
})
