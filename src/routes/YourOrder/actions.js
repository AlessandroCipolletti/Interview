import { FETCH_ORDER, ORDER_FETCH_SUCCESS, ORDER_FETCH_ERROR } from './constants'


export const fetchOrderAction = () => {
  return {
    type: FETCH_ORDER,
  }
}

export const receiveOrderAction = (orderData) => {
  return {
    type: ORDER_FETCH_SUCCESS,
    orderData,
  }
}

export const orderErrorAction = () => {
  return {
    type: ORDER_FETCH_ERROR,
  }
}
