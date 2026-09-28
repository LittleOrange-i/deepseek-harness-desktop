/**
 * shell-theme-alignment.test.ts — 壳层主题与 dsh alias token 的对齐契约。
 *
 * 壳层的 HeroUI 组件（对话框 / 菜单 / 输入 / 通知 / 状态标签）全部读 HeroUI 语义变量
 * （`--background`、`--surface`、`--accent` …），HeroUI 的 `@theme inline` 又把这些变量
 * 内联进 Tailwind 工具类。一旦某个变量漏配，组件就会悄悄落回 HeroUI 默认调色板，而单测
 * 与 E2E 断言颜色都看不出来——所以这里用源码关系把「深浅两套主题都得有显式 dsw 取值」
 * 钉死。取值同源：官方 design-platform.css。
 */
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const css = readFileSync(new URL('../src/styles/main.css', import.meta.url), 'utf8')
const [darkTheme = '', lightTheme = ''] = css.split(/^html\[data-theme="light"\] \{/m)

const herouiSemanticTokens = [
  'background',
  'foreground',
  'surface',
  'surface-secondary',
  'surface-tertiary',
  'overlay',
  'muted',
  'default',
  'default-foreground',
  'accent',
  'accent-foreground',
  'field-background',
  'field-border',
  'success',
  'success-foreground',
  'warning',
  'warning-foreground',
  'danger',
  'danger-foreground',
  'segment',
  'segment-foreground',
  'border',
  'separator',
  'link',
  'scrollbar-thumb',
  'backdrop',
]

function declares(block: string, token: string) {
  return new RegExp(`^\\s*--${token}:`, 'm').test(block)
}

describe('壳层主题对齐 dsh alias token', () => {
  it('每个 HeroUI 语义变量在深色默认块与 light 块里都有显式取值', () => {
    const missing = herouiSemanticTokens.filter(
      token => !declares(darkTheme, token) || !declares(lightTheme, token),
    )
    expect(missing).toEqual([])
  })

  it('--accent 取 dsw brand-primary（深色白、浅色黑），不再复用蓝色业务色', () => {
    expect(darkTheme).toMatch(/^\s*--accent:\s*#f9fafb;/m)
    expect(lightTheme).toMatch(/^\s*--accent:\s*#0f1115;/m)
    expect(darkTheme).toMatch(/^\s*--accent-foreground:\s*#0f1115;/m)
    expect(lightTheme).toMatch(/^\s*--accent-foreground:\s*#ffffff;/m)
  })

  it('输入控件描边取官方 Input.module.css 的 0.5px + border-l4', () => {
    expect(darkTheme).toMatch(/^\s*--field-border-width:\s*0\.5px;/m)
    expect(darkTheme).toMatch(/^\s*--field-border:\s*var\(--color-line-strong\);/m)
    expect(lightTheme).toMatch(/^\s*--field-border:\s*var\(--color-line-strong\);/m)
  })

  it('不再声明与 HeroUI 同名的 --color-accent/--color-muted/--color-danger（会被内联层覆盖成死值）', () => {
    for (const token of ['--color-accent:', '--color-muted:', '--color-danger:']) {
      expect(css).not.toContain(token)
    }
  })

  it('tailwind.config 把同名颜色指向 HeroUI 语义变量，业务蓝改走 info', () => {
    const config = readFileSync(new URL('../tailwind.config.js', import.meta.url), 'utf8')
    expect(config).toContain('\'muted\': \'var(--muted)\'')
    expect(config).toContain('\'accent\': \'var(--accent)\'')
    expect(config).toContain('\'danger\': \'var(--danger)\'')
    expect(config).toContain('\'info\': \'var(--color-info)\'')
    expect(config).toContain('\'info-hover\': \'var(--color-info-hover)\'')
  })
})
