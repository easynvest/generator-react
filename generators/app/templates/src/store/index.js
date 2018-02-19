import { createStore } from 'redux'
import rootReducer from './rootReducer'

let store = null

export default function configureStore(initialState) {
  if (store === null) {
    store = createStore(
      rootReducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    if (process.env.NODE_ENV === 'development') {
      window.__store = store
    }
  }
  return store
}
