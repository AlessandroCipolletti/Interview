import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOrder } from './orderUtils'
import { receiveOrderAction, fetchOrderAction, orderErrorAction } from './actions'
import { Label, Title }  from './styled'

const orderId = 'UK1876YH08_2'


const YourOrder = () => {
  const needsToFetch = useSelector((state) => state.yourOrder.state === 0)
  const orderData = useSelector((state) => state.yourOrder.orderData)
  const dispatch = useDispatch()

  useEffect(() => {
    if (needsToFetch) {
      dispatch(fetchOrderAction())
      fetchOrder(orderId).then(result => {
        if (result) {
          dispatch(receiveOrderAction(result))
        } else {
          dispatch(orderErrorAction())
        }
      })
    }

  }, [needsToFetch])

  return (
    <>
      <Title>Your Order:</Title>
      <Label>id: {orderId}</Label>
      <Label>First name: {orderData.firstName}</Label>
      <Label>Last name: {orderData.lastName}</Label>
      <Label>Trackers id: {orderData?.trackers && orderData.trackers.map(t => t.id).join()}</Label>
    </>
  )
}

export default YourOrder
