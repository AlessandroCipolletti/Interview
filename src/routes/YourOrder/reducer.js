import { produce } from 'immer'

import { FETCH_ORDER, ORDER_FETCH_SUCCESS, ORDER_FETCH_ERROR } from './constants'


const initialState = {
  state: 0, // 0: not fetched, 1: fetching, 2: fetched, 3: error
  orderData: {},
}

const yourOrderReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action?.type) {
      case FETCH_ORDER:
        draft.state = 1
        draft.orderData = {}
        break

      case ORDER_FETCH_SUCCESS:
        draft.state = 2
        console.log(action.orderData.trackers)
        draft.orderData = action.orderData
        break

      case ORDER_FETCH_ERROR:
        draft.state = 3
        draft.orderData = {}
        break

      default:
        break
    }
  })


export default yourOrderReducer
