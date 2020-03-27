import { AppConfig } from './types'

const defaultConfig: AppConfig = {
  application: {
    basePath: '',
    storePersistenceKey: 'webpack-sample-sample',
  },
  endpoints: {
    countries: {
      host: 'https://restcountries.eu/rest/v2',
      v2: {
        path: '/all',
        method: 'GET',
        fullUrl: 'https://restcountries.eu/rest/v2/all',
      },
    },
    gravatar: {
      host: 'https://www.gravatar.com',
      avatar: {
        method: 'GET',
        path: '/avatar',
        fullUrl: 'https://www.gravatar.com/avatar',
      },
    },
  },
  sentry: {
    dsn: process.env.SENTRY_DSN_KEY || '',
  },
}

export default defaultConfig
