import { GET } from './constants'

export const BASE_URL = 'https://api.shipup.co'
export const PRIVATE_KEY = 'lnWvjqugGwUay3jKE8j31w'

const DEFAULT_API_TIMEOUT = 10_000



export const api = (
  url,
  method = GET,
  dataTranslator = ((data) => data),
  defaultTimeout = DEFAULT_API_TIMEOUT
) => ({
  url,
  method,
  dataTranslator,
  defaultTimeout,
})


const apisConfig = {
  getOrder: api(`${BASE_URL}${'/v2/orders'}`, GET),
  getTracker: api(`${BASE_URL}${'/v2/trackers'}`, GET),
}


export default apisConfig
