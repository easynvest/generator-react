import dotenv from 'dotenv'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'store'
import registerServiceWorker from './registerServiceWorker'
import App from './App'

dotenv.config()
const store = configureStore()

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Application />, document.getElementById('app'))
registerServiceWorker()
