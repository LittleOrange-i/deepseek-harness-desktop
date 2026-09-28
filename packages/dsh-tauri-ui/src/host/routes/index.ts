import { defineRoutes } from 'dsh-tauri'
import openConfig from './config/open/post'
import endpointModels from './endpoint/models/get'
import presets from './presets/get'
import resume from './session/resume/post'
import ungrouped from './ungrouped/get'

export const routes = defineRoutes((disposer) => {
  disposer.post({ kind: 'exact', path: '/api/desktop/dsh-tauri-ui/session/resume' }, resume)
  disposer.post({ kind: 'exact', path: '/api/desktop/dsh-tauri-ui/config/open' }, openConfig)
  disposer.get({ kind: 'exact', path: '/api/desktop/dsh-tauri-ui/endpoint/models' }, endpointModels)
  disposer.get({ kind: 'exact', path: '/api/desktop/dsh-tauri-ui/presets' }, presets)
  disposer.get({ kind: 'exact', path: '/api/desktop/dsh-tauri-ui/ungrouped' }, ungrouped)
})
