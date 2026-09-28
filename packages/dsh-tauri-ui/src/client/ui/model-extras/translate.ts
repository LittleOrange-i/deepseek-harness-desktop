import type { Translate } from './types'
import { locale } from '../../locales'

export const MODEL_EXTRAS_KEYS = [
  'apply',
  'openConfigFile',
  'openConfigFileHint',
  'openConfigFileLanded',
  'openConfigFileDirectory',
  'openConfigFileFailed',
  'autoConfigureModels',
  'autoConfigureModelsHint',
  'fetchModelConfig',
  'fetchModelConfigHint',
  'fetchingConfig',
  'configUnreachable',
  'configNoneApplied',
  'configApplied',
  'configUndisclosed',
  'modelConfig',
  'thinkingMode',
  'thinkingLevels',
  'thinkingModeHint',
  'developerRole',
  'developerRoleHint',
] as const

export const modelExtrasTranslate: Translate = (key, params) => (locale.text as Translate)(key, params)
