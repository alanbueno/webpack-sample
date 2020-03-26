import { IConfig } from '../../node_modules/@types/config'

export interface Route {
  path: string
  method: string
  fullUrl?: string
}

export interface Client {
  host: string
  route: Route
}

export interface AppConfig extends IConfig {
  application: {
    basePath: string
    storePersistenceKey: string
  }
  endpoints: {
    countries: {
      host: string
      v2: Route
    }
    gravatar: {
      host: string
      avatar: Route
    }
  }
  sentry: {
    dsn: string
  }
}
