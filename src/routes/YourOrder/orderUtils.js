import RequestApi from '../../common/apis/RequestApi'
import { HTTP_STATUS_CODE_OK } from '../../common/apis/constants'


export const fetchOrder = async (orderID) => {
  const params = {
    order_number: orderID,
  }
  const [result, response] = await RequestApi.getOrder({ params })

  if (response.status === HTTP_STATUS_CODE_OK) {
    const orderData = result.data[0]
    return orderData
  }


  return null
}
