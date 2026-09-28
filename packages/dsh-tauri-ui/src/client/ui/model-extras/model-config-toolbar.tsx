import type { ReactElement } from 'react'
import type { Translate } from './types'
import { Action } from '../../components/action'

export type ModelDraft = Record<string, unknown>

export interface ModelProbeTarget {
  settingsNs: string
  profilePath: readonly string[]
  provider?: string
  baseURL?: string
  api?: string
  apiKey?: string
}

export interface ModelConfigToolbarProps {
  t: Translate
  onOpenConfig?: () => void
  openConfigLabel?: string
  openConfigHint?: string
  disabled?: boolean
}

/**
 * 模型页工具条：只保留「打开配置文件」。
 * 文本编辑器选择器已删除——官方 `dsh-client-ui-open-in-app` 已独占「用哪个应用打开」这件事
 * （自带应用目录与记忆选择，且不对外 provide 客户端服务），本包不再重复实现。
 */
export function ModelConfigToolbar({
  t,
  onOpenConfig,
  openConfigLabel,
  openConfigHint,
  disabled,
}: ModelConfigToolbarProps): ReactElement {
  return (
    <div className="flex items-center flex-wrap gap-[8px] min-w-0">
      {onOpenConfig === undefined
        ? null
        : (
            <Action
              variant="link"
              disabled={disabled}
              title={openConfigHint}
              onClick={onOpenConfig}
            >
              {openConfigLabel ?? t('openConfigFile')}
            </Action>
          )}
    </div>
  )
}
