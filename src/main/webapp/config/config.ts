import { devConfig } from './config.dev'
import { prodConfig } from './config.prod'

interface ClientConfig {
  apiUrl: string,
  host: string,
  port: string,
  tokenKey: string,
  cookie: string,
  storageKey: string
}

let config: ClientConfig

switch (ENV) {
  case 'production':
  case 'prod':
    config = prodConfig
    break
  case 'development':
  case 'dev':
    config = devConfig
    break
  default:
    break
}

export { config }
