import ApiClient from '../ApiClient/ApiClient'

export const BASE_URL = 'https://api.shipup.co'
export const PRIVATE_KEY = 'lnWvjqugGwUay3jKE8j31w'

const apis = {
  getOrder: {
    url: `${BASE_URL}${'/v2/orders'}`,
    headers: {
      'Authorization': `Bearer ${PRIVATE_KEY}`,
    },
  },
}
const Api = await new ApiClient({ apis })


export default Api
