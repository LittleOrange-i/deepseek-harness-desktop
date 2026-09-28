# 上游同步日志

记录 `dsh-tauri` 与内核 [`deepseek-ai/deepseek-harness`](https://github.com/deepseek-ai/deepseek-harness)（`source/deepseek-harness`）的宿主契约对照进度。

按 `docs/specs/upstram.sync.md` §1.2，内核属「必须兼容的运行时依赖」，本日志只登记**载体契约**（`dshDesktop` 标记、index 注入行、鉴权闸门、`__DSH_BOOT__`），不参与择优移植。

## 当前状态

- 已采纳基线：`dsh-v0.2.0-rc.1`（`4878cdabd87`）
- 上一基线：`dsh-v0.1.7-rc.2`（`477b4f42055`）
- 本地路径：`source/deepseek-harness`（git submodule，HEAD 与基线一致）
- 同步范围：261 commits（167 非 merge）
- 登记 `pnpm-workspace.yaml` `catalogs.dsh` 全部钉 `0.2.0-rc.1`

## 已核对的载体契约（逐字节未变）

- 鉴权闸门：`packages/client/connection/src/{rpc,rpc-host,browser-auth}.ts`、`packages/host/frontend-static/src/index.ts`、`packages/host/open-in-app/src/index.ts` 与 0.1.7-rc.2 逐字节相同 → `src/host/service/gate.ts` 覆写的 `requestRejection` / `authorizeIndex` 无需改动。
- index 注入行：`packages/host/webserver/src/{index,injections}.ts` 逐字节相同（上游导出名为 `IndexInjection`，本地自定名 `IndexInjectRow`，`kind: 'global' | 'script'` 语义不变）→ `src/host/types/harness.ts` 契约不变。
- 载体标记：`apps/desktop/src/preload-app.ts` 仍为 `protocolVersion: 1`；`apps/desktop/src/host-protocol.ts` 仍为 `DESKTOP_HOST_PROTOCOL_VERSION = 4`。
- 账号流：`packages/api/account-controller/src/index.ts:119` 的 `watch(signal)` 与 `ui-settings-account` 的 `$stream({ name: 'account' })` 均未变 → `src/client/register/account.ts` 无需改动。
- 启动清单：`__DSH_BOOT__` 线上格式不变，`dsh-tauri-ssh` 的 `BOOT_MARKER` 正则仍可匹配。

## 本次采纳

- **载体契约基线推进**至 `0.2.0-rc.1`：随基线自动获得内核侧修复（session repair 的 `ToolCallRecovery` 重写与 `observe()` TypeError 崩溃修复、失败 step 的悬空 `tool/call` 回收、OTel 字节上限 `maxRequestBytes`、web-search `deepseek-account` 路由鉴权）。
- **`dshDesktop.deviceInfo`**（官方 0.2.0 反馈表单新增的可选能力）：`src/host/apply.ts` 的注入脚本发布 `deviceInfo: async () => navigator.userAgent`，与官方缺失该能力时的取值一致；不伪造 Electron 的产品 API。测试见 `src/host/apply.test.ts`。

## 本轮归档（不实施）

- **Windows 标题栏 / 全屏 DOM 契约**：0.2.0 起 `ui-layout` / `ui-dockkit` / `ui-sidebar-right` 依赖 `html[data-windows-titlebar][data-fullscreen]` 与 `--dsh-windows-titlebar-height`；官方由 Electron preload 提供（`apps/desktop/src/preload-windows.ts:12-13`、`preload-platform.ts:30-31`）。本地壳不设这些属性，仅在 Windows 全屏时浮动层/遮罩保留顶栏内边距（视觉偏移，不影响功能）。
- **`dshDesktop.deviceInfo` 的设备指纹**：官方 `readDeviceInfo()` 输出 `platform; os; app_arch; cpu; memory_gib`；本地按要求只用 `navigator.userAgent`。
- **新可选包**：`@deepseek-ai/dsh-client-product-analytics`、`@deepseek-ai/dsh-client-ui-settings-session-log`、`@deepseek-ai/dsh-otel` 均为桌面宿主 bundle 的传递依赖，本地工作区无任何 `package.json` 引用；`catalogs.dsh` 因此不加条目（pnpm 的 `yaml-no-unused-catalog-item` 规则会拒绝）。
- **Electron 专属适配**：`macos-entitlements.plist`（本地由 `src-tauri/Entitlements.plist` + `Info.plist` 覆盖）、koffi 版本 pin（本地运行时从已装内核动态读取）、`scripts/verify-npm-install-layout.ts`、`scripts/install-lefthook.mjs`（本地无 lefthook）、`scripts/smoke-python-runtime.py`（本地无 Python SDK）。

## 有意保留的差异

- `src/host/service/gate.ts` 覆写两道鉴权闸门以适配本地嵌入式 WebView，上游只定义 `connection` 闸门语义；该差异在本次区间内零冲突。
- 只发布 `{ protocolVersion: 1, deviceInfo }`，不伪造 Electron 的 `updates` / `browser` 产品 API。
