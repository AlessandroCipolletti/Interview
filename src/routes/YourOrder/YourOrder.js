import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOrder } from './orderUtils'
import { receiveOrderAction } from './actions'
import { DataWrapper }  from './styled'

const orderID = 'UK1876YH08_2'


const YourOrder = () => {
  const [status, setStatus] = useState(0) // 0: not fetched, 1: fetching, 2: fetched, 3: error
  const orderData = useSelector((state) => state.yourOrder.orderData)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('effect', status)
    if (status === 0) {
      setStatus(1)
      fetchOrder(orderID).then(orderData => {
        if (orderData) {
          setStatus(2)
          dispatch(receiveOrderAction(orderData))
        } else {
          setStatus(3)
        }
      })
    }

  }, [status])


  return (
    <>
      Your Order:
      <br />
        id: {orderID}
      <br /><br />
      Data:
      <br /><br />
      <DataWrapper>
        {JSON.stringify(orderData)}
      </DataWrapper>
    </>
  )
}

export default YourOrder
