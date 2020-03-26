import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
import { init } from '@sentry/browser'
import { toast } from 'react-toastify'

// import store, { persistor } from './store'
import config from 'config'

// import BasePage from './shared/components/BasePage'

const dsn = config.sentry

if (dsn) {
  init(dsn)
}

toast.configure()

const App: React.FC = () => (
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>

  <BrowserRouter basename={config.application.basePath}>
    <Switch>
      <Redirect from="/" to="/users" exact />
      <Route path="/users" component={() => <div>Test</div>} exact />
    </Switch>
  </BrowserRouter>

  //   </PersistGate>
  // </Provider>
)

export default App
