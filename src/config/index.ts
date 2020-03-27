/* eslint-disable security/detect-object-injection */
import { AppConfig } from './types'
import defaultConfig from './default'

type ConfigMerge = (config: object, envConfig: object) => AppConfig

// I rather not install support packages like ramda or lodash just to deep merge the config
// it can be easily done manually
export const configMerge: ConfigMerge = (config, envConfig) => {
  const isObject = (obj) => obj && typeof obj === 'object'

  if (!isObject(config) || !isObject(envConfig)) {
    return envConfig as AppConfig
  }

  Object.keys(envConfig).forEach((key) => {
    const configValue = config[key]
    const envConfigValue = envConfig[key]

    if (Array.isArray(configValue) && Array.isArray(envConfigValue)) {
      config[key] = configValue.concat(envConfigValue)
    } else if (isObject(configValue) && isObject(envConfigValue)) {
      config[key] = configMerge(Object.assign({}, configValue), envConfigValue)
    } else {
      config[key] = envConfigValue
    }
  })

  return config as AppConfig
}

export const config = configMerge(
  defaultConfig,
  // eslint-disable-next-line @typescript-eslint/no-var-requires, security/detect-non-literal-require
  require(`./${process.env.NODE_ENV || 'development'}.ts`)
)
export default config

// test for dynamic configs with webpack resolving the file to bundle
// export default ({ options }, loaderContext) => {
//   console.log('heeeere', options)

//   return { code: 'module.exports = ' + configMerge(defaultConfig, options.envConfig) }
// }
