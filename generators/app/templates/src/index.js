import dotenv from 'dotenv'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './App'

dotenv.config()

ReactDOM.render(<App />, document.getElementById('app'))
registerServiceWorker()
