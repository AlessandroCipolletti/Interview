import { createStore, combineReducers } from 'redux'
import yourOrderReducer from '../routes/YourOrder/reducer'
import page2Reducer from '../routes/Page2/reducer'


const globalReducer = combineReducers({
  common: {},
  yourOrder: yourOrderReducer,
  page2: page2Reducer,
})


const store = createStore(globalReducer)

export default store
