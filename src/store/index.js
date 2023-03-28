import { combineReducers, createStore } from 'redux'

import mesesReducer from './reducers/meses.reducer'
import typeReducer from './reducers/types.reducer'

const RootReducer = combineReducers({
 meses: mesesReducer,
  types: typeReducer,
})

export default createStore(RootReducer)