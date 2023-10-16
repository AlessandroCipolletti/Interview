import RequestApi from '../../common/apis/RequestApi'
import { HTTP_STATUS_CODE_OK } from '../../common/apis/constants'


export const fetchOrder = async (orderId) => {
  const params = {
    order_number: orderId,
    'expand[]': 'fulfillments.trackers',
  }
  const [orderResult, orderResponse] = await RequestApi.getOrder({ params })

  if (orderResponse.status !== HTTP_STATUS_CODE_OK) {
    return null
  }

  const order = orderResult.data[0]

  const orderData = {
    firstName: order.first_name,
    lastName: order.last_name,
    fulfillmentsId: order.fulfillments.data.map(f => f.id),
    trackers: [].concat(order.fulfillments.data.map(f => f.trackers.data))[0],
  }
  console.log(orderData.trackers)


  return orderData
}
