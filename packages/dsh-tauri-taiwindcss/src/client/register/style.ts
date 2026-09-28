import { mountStyle } from 'dsh-tauri-ui/client'
import { defineRegister } from 'dsh-tauri/client'
import { PLUGIN_ID } from '../../shared/constants'
import taiwindcss from '../styles/taiwindcss'

const STYLE_ID = 'dsh-tauri-taiwindcss-styles'

export const registerStyle = defineRegister((controller) => {
  controller.add(mountStyle(taiwindcss, STYLE_ID, PLUGIN_ID))
})
