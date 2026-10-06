![deepseek-harness-desktop](https://socialify.git.ci/dsh-tauri/deepseek-harness-desktop/image?custom_description=DeepSeek+Harness+Tauri+%E6%A1%8C%E9%9D%A2%E7%89%88+%7C+Small+installer%2C+zero+environment+setup%2C+preset+plugins%2C+Windows+%2F+macOS+%2F+Linux.&custom_language=Rust&description=1&font=Bitter&forks=1&issues=1&language=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2Fdsh-tauri%2Fdeepseek-harness-desktop%2F73e89bbe8430896cb9c989f96c083cf74aa75de6%2Fpublic%2Fdeepseek-harness-desktop-tauri.svg&name=1&owner=1&pattern=Circuit+Board&pulls=1&stargazers=1&theme=Dark)

<h1 align="center">DeepSeek Harness Desktop</h1>

<p align="center">
  Ejecutá <a href="https://github.com/deepseek-ai/deepseek-harness">DeepSeek Harness</a> en tu escritorio —<br />
  sin configurar Node.js, pnpm ni Docker manualmente; las instalaciones normales pueden necesitar red al iniciar.
</p>

<p align="center">
  <a href="https://github.com/dsh-tauri/deepseek-harness-desktop/releases">
    <img src="https://img.shields.io/github/v/release/dsh-tauri/deepseek-harness-desktop?style=flat-square&label=release&color=4D6BFE" alt="Release" />
  </a>
  <img src="https://img.shields.io/badge/dsh-0.2.0--rc.2-4D6BFE?style=flat-square" alt="dsh 0.2.0-rc.2" />
  <img src="https://img.shields.io/badge/Windows%20%7C%20macOS%20%7C%20Linux-black?style=flat-square" alt="Windows | macOS | Linux" />
  <img src="https://img.shields.io/github/license/dsh-tauri/deepseek-harness-desktop?style=flat-square&label=license&color=4D6BFE" alt="MIT License" />
  <br>
  <img src="https://img.shields.io/github/downloads/dsh-tauri/deepseek-harness-desktop/total?style=flat-square&label=downloads&color=4D6BFE" alt="Downloads" />
  <img src="https://img.shields.io/github/stars/dsh-tauri/deepseek-harness-desktop?style=flat-square&label=stars&color=4D6BFE" alt="Stars" />
  <img src="https://img.shields.io/github/contributors/dsh-tauri/deepseek-harness-desktop?style=flat-square&label=contributors&color=4D6BFE" alt="Contributors" />
  <img src="https://img.shields.io/github/commit-activity/m/dsh-tauri/deepseek-harness-desktop?style=flat-square&label=commits&color=4D6BFE" alt="Commit activity" />
</p>

<p align="center">
  <samp><a href="https://dshtauri.mintlify.site/en/installation">Descargar</a> · <a href="./README.en.md">English</a> · <strong>Español</strong> · <a href="https://dshtauri.mintlify.site">Documentación</a> · <a href="./README.md">中文</a></samp>
</p>

<p align="center">
  <a href="https://trendshift.io/developers/13307?utm_source=developer-badge&amp;utm_medium=badge&amp;utm_campaign=badge-developer-13307" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/developers/13307" alt="hairyf | Trendshift" width="250" height="55"/></a>
  <a href="https://trendshift.io/repositories/151676?utm_source=trendshift-badge&amp;utm_medium=badge&amp;utm_campaign=badge-trendshift-151676" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/trendshift/repositories/151676/daily?language=Rust" alt="dsh-tauri%2Fdeepseek-harness-desktop | Trendshift" width="250" height="55"/></a>
</p>

<p align="center">
  <img src="./docs/images/hero-en.png" width="100%" alt="Banner de DSH Desktop" />
</p>

## Características

- 🪶 **Escritorio nativo** — Tauri 2 + React 19 + HeroUI 3, con la interfaz local de Harness integrada.
- 🔄 **Gestión del runtime** — Instalá dependencias, elegí versiones del núcleo y accedé a actualizaciones del escritorio y del núcleo.
- 🧩 **Gestión de plugins** — 12 plugins integrados; instalación desde directorios locales, desactivación de integrados y gestión de plugins comunitarios.
- 🗂️ **Configuración por perfiles** — Separá plugins y ajustes, con migración de los datos del perfil en un clic, backup y clonado.
- 💽 **Directorio de datos** — Elegí la ubicación al instalar en Windows; migrá o revertí los datos desde Ajustes en Windows, macOS y Linux.
- ⌨️ **Integración con la terminal** — Comandos `dsh` / `pnpm` mediante shims administrados, no una instalación global del núcleo por npm.
- 🐾 **Mascotas de escritorio** — Recursos Pets / Codex, importación de paquetes y actividad de conversaciones; los recursos predefinidos son remotos.
- 🎨 **Personalización** — 8 paletas, escala de interfaz local, modo terminal, opacidad ajustable y desenfoque esmerilado opcional.

## Plugins integrados

Plugins propios distribuidos con los recursos del escritorio:

- [DSH Tauri](https://github.com/dsh-tauri/deepseek-harness-desktop/tree/main/packages/dsh-tauri) — Plugin central: comunicación del escritorio con Harness, adaptadores de versión y gestión de dependencias de plugins
- [DSH Tauri UI](https://github.com/dsh-tauri/deepseek-harness-desktop/tree/main/packages/dsh-tauri-ui) — Interfaz de ajustes del escritorio, componentes nativos del núcleo, temas y paletas
- [DSH Tauri Mobile UI](https://github.com/dsh-tauri/deepseek-harness-desktop/tree/main/packages/dsh-tauri-mobile-ui) — Diseños táctiles y preferencias móviles
- [DSH Tauri Worktree](https://github.com/dsh-tauri/deepseek-harness-desktop/tree/main/packages/dsh-tauri-worktree) — Worktrees Git por sesión y checkout
- [DSH Tauri Extension](https://github.com/dsh-tauri/deepseek-harness-desktop/tree/main/packages/dsh-tauri-extension) — Gestor oficial de plugins, mercado de plugins, Skills y MCP
- [DSH Tauri Scheduler](https://github.com/dsh-tauri/deepseek-harness-desktop/tree/main/packages/dsh-tauri-scheduler) — Tareas programadas e historial
- [DSH Tauri Archive](https://github.com/dsh-tauri/deepseek-harness-desktop/tree/main/packages/dsh-tauri-archive) — Archivo y restauración de chats
- [DSH Tauri Pet](https://github.com/dsh-tauri/deepseek-harness-desktop/tree/main/packages/dsh-tauri-pet) — Ajustes de mascotas y estados de actividad
- [DSH Tauri Rightclick Menu](https://github.com/dsh-tauri/deepseek-harness-desktop/tree/main/packages/dsh-tauri-rightclick) — Menús contextuales de sesiones, workspaces y texto
- [DSH Tauri Model](https://github.com/dsh-tauri/deepseek-harness-desktop/tree/main/packages/dsh-tauri-model) — Selección de modelos, parámetros y configuración automática
- [DSH Tauri SSH](https://github.com/dsh-tauri/deepseek-harness-desktop/tree/main/packages/dsh-tauri-ssh) — Conexiones Harness remotas y sincronización por SSH
- [DSH Tauri Notification](https://github.com/dsh-tauri/deepseek-harness-desktop/tree/main/packages/dsh-tauri-notification) — Notificaciones de conversaciones y acciones

## Preajustes opcionales

El asistente ofrece los siguientes plugins comunitarios para instalar a demanda.

- [DSH Market](https://github.com/dsh-market/dsh-market) — Mercado de plugins comunitarios
- [DSH Better Sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) — Barra lateral del editor por sesión
- [Billion Context](https://github.com/ranxianglei/billion-context) — Compresión de contexto y restauración del historial
- [DSH Rewind](https://github.com/SiriLee/dsh-rewind) — Retroceso de conversación y backups del workspace
- [DSH Bridge](https://github.com/wenbin-wb/dsh-bridge) — Acceso remoto, túneles y conexión de bots
- [DSH IM](https://github.com/xmanrui/dsh-im) — Canales IM y gestión de bots

Pedí preajustes nuevos o actualizados mediante [Issues](https://github.com/dsh-tauri/deepseek-harness-desktop/issues). Las versiones disponibles siguen las reglas de compatibilidad del manifiesto.

## Inicio rápido

Descargá el instalador de tu plataforma y arquitectura desde [Releases](https://github.com/dsh-tauri/deepseek-harness-desktop/releases):

| Plataforma | Requisitos | Instalador |
| --- | --- | --- |
| Windows | Windows 10+, WebView2 | x64 `.exe` / `.msi` |
| macOS | macOS 12+; la interfaz web necesita capacidades de Safari 17.4+ | Intel / Apple Silicon `.dmg` |
| Linux | Bibliotecas de runtime WebKit2GTK 4.1 | x64 `.AppImage` / `.deb` |

En macOS también podés instalar por Homebrew:

```bash
brew install dsh-tauri/desktop/deepseek-harness
```

- Los instaladores normales necesitan red en el primer arranque para descargar los componentes faltantes del runtime y del núcleo. Las funciones Git necesitan un Git disponible.
- Los nombres con sufijo `Bundle` son instaladores sin conexión (`_Bundle_*.exe`, `_Bundle_*.deb` y dos `_Bundle_*.dmg`).
- Ejecutar localmente no significa estar totalmente sin conexión: modelos, instalación de plugins, actualizaciones y recursos de mascotas predefinidas pueden usar red.
- Para problemas de pantalla, Wayland, AppImage y permisos en Linux, consultá la [documentación de instalación y solución de problemas](https://dshtauri.mintlify.site).

### Proxy del escritorio

- Configurá un proxy HTTP, HTTPS, SOCKS5 o SOCKS5H en **Configuración → Aplicación → URL del proxy**.
- Solo afecta descargas del runtime/núcleo, actualizaciones y metadatos de plugins; no cambia peticiones de modelos ni subprocesos de plugins.
- Vacío hereda la configuración del sistema/entorno. Los cambios se aplican a nuevas peticiones; reintentá las descargas fallidas.
- SOCKS5H resuelve los nombres por el proxy; las conexiones de loopback siguen directas.

## Runtime

Windows muestra los errores de inicio en un diálogo nativo. Para `STARTUP_LOW_INTEGRITY`:

- El proceso está por debajo de Medium y no puede escribir datos normales; una actualización puede heredar la etiqueta Low del directorio.
- Revisá el directorio y el ejecutable con `icacls`. Restaurá una instalación confiable a Medium o reinstalá en un directorio normal.
- Ejecutar como administrador no elimina esa restricción. No borres sesiones ni cambies `DSH_HOME`.

| Base actual | Versión |
| --- | --- |
| Núcleo Harness recomendado | `0.2.0-rc.2` |
| Núcleo mínimo declarado | `0.1.5-rc.1`; no garantiza compatibilidad con todos los plugins |

- La selección del núcleo y los preajustes sigue el [manifiesto de recursos](<./src-tauri/resources/manifest.jsonc>) y los rangos declarados por los plugins; no garantiza compatibilidad con cualquier nueva versión oficial.
- La integración CLI está habilitada por defecto en release: Windows / macOS / Linux actualizan el PATH automáticamente. Reabrí la terminal; otros shells pueden seguir necesitando configuración manual.

## Comunidad

<table>
  <tr>
    <td align="center"><img src="./docs/images/community/qq.png" width="180" height="180" alt="QR del grupo QQ" /><br /><strong>Grupo QQ</strong></td>
    <td align="center"><img src="./docs/images/community/wechat.png" width="180" height="180" alt="QR del grupo WeChat" /><br /><strong>Grupo WeChat (lleno, agregame primero) →</strong></td>
    <td align="center"><img src="./docs/images/community/wechat-hairy.png" width="180" height="180" alt="QR de WeChat" /><br /><strong>WeChat</strong></td>
  </tr>
</table>

## Desarrollo

Consultá la [guía en inglés](<./docs/DEVELOPMENT.md>) o la [guía en chino](<./docs/DEVELOPMENT.zh.md>). Los detalles de funciones están en la [documentación online](https://dshtauri.mintlify.site).

## Notas

> [!WARNING]
> **Vista previa** — el `dsh` oficial evoluciona rápido y puede introducir cambios incompatibles; verificá la compatibilidad antes de actualizar.

> [!NOTE]
> **Seguridad** — `dsh` puede ejecutar código en tu máquina. Solo para aprender / investigar / probar; usalo en un entorno confiable y aislado.

## Relacionados

- [deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) — plataforma agent `dsh` oficial
- [deepseek-harness-pkg](https://github.com/dsh-tauri/deepseek-harness-pkg) — distribuciones Harness prearmadas y fuente de descarga
- [dsh-pet](https://github.com/PC2005-cloud/dsh-pet) · [dsh-pet-mov](https://github.com/dsh-tauri/dsh-pet-mov) · [dsh-pet-component](https://github.com/dsh-tauri/dsh-pet-component) — recursos y render de mascotas
- [dsh-plugin-codex-pets](https://github.com/Skylarking/dsh-plugin-codex-pets) · [BongoCat](https://github.com/ayangweb/BongoCat) · [dsh-dafeiyu](https://github.com/QCYTSN/dsh-dafeiyu) · [codex-to-dsh-pet](https://github.com/Signalight/codex-to-dsh-pet) — proyectos de referencia de mascotas

## Contributors

![Contributors](https://contrib.rocks/image?repo=dsh-tauri/deepseek-harness-desktop)

## Licencia

[MIT](<./LICENSE>) con [condición no comercial](<./LICENSE.details>) © deepseek-harness-desktop contributors
