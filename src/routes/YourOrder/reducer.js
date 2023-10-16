import { produce } from 'immer'

import { FETCH_ORDER, ORDER_FETCH_SUCCESS, ORDER_FETCH_ERROR } from './constants'


const initialState = {
  orderData: {},
}

const yourOrderReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action?.type) {
      case FETCH_ORDER:
      case ORDER_FETCH_ERROR:
        draft.orderData = {}
        break

      case ORDER_FETCH_SUCCESS:
        draft.orderData = action.orderData
        break

      default:
        break
    }
  })


export default yourOrderReducer
