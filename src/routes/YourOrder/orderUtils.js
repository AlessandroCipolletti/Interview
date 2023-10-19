import Api from '../../common/Api/Api'


export const fetchOrder = async (orderId) => {
  const params = {
    order_number: orderId,
    'expand[]': 'fulfillments.trackers',
  }
  const [orderResult] = await Api.getOrder({ params })

  const order = orderResult.data[0]

  const orderData = {
    firstName: order.first_name,
    lastName: order.last_name,
    fulfillmentsId: order.fulfillments.data.map(f => f.id),
    trackers: [].concat(order.fulfillments.data.map(f => f.trackers.data))[0],
  }

  return orderData
}
