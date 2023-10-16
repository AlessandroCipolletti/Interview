import { ORDER_FETCH_SUCCESS } from './constants'


export const receiveOrderAction = (orderData) => {
  return {
    type: ORDER_FETCH_SUCCESS,
    orderData,
  }
}
