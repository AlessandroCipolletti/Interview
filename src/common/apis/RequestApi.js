import Apis, { PRIVATE_KEY } from './apisConfig'
import { formatApiUrlWithParams } from '../helpers/api'
import { stringIsJson } from '../helpers/json'

import {
  HTTP_STATUS_CODE_NO_CONTENT,
  HTTP_STATUS_CODES_WITH_CONTENT,
  HTTP_STATUS_CODE_NOT_FOUND,
  HTTP_STATUS_CODE_TIMEOUT,
  HTTP_STATUS_CODE_SERVER_ERROR,
  HTTP_STATUS_CODE_BAD_GATEWAY,
} from './constants'


const defaultDataTranslator = (data) => data


/**
 * @example
 * Wherever you want
 * const [articles] = await RequestApi.getArticles()
 *
 * const params = { id: 123 }
 * const [article] = await RequestApi.getOneArticle({ params })
 *
 * const body = { key: "value" }
 * const [result] = await RequestApi.saveArticle({ body })
 *
 * const params = { id: 123 }
 * const body = { key: "value" }
 * const [result] = await RequestApi.updateArticle({ params, body })
 *
 * const params = { id: 123 }
 * const [result, response] = await RequestApi.deleteArticle({ params })
 *  --> You can access the native 'response' here
 *
 * // const revalidateDuration = 30
 * // const [articles] = await RequestApi.getArticles({ revalidateDuration })
 * // --> You can specify a next-revalidate time to each api call
 *
 *
 * NB:
 * - If you need to do some custom validation, you can access the native fetch response using the second param
 * - If something goes wrong, no error is throw, but the first returned param is false
 * - If the api returns nothing, the first param contains at least true or false
 */
export const createApi = ({
  url,
  method,
  dataTranslator = defaultDataTranslator,
  defaultTimeout,
}, apiName) => async ({
  pageUrl = 'unknown',
  params,
  body,
  timeout = defaultTimeout,
} = {}) => {
  if (!url) {
    const errorResponse = {
      status: HTTP_STATUS_CODE_BAD_GATEWAY,
    }
    const errorApi = new Error('No url provided')
    return [false, errorResponse, errorApi]
  }


  const apiUrl = formatApiUrlWithParams(url, params)
  const bodyString = body ? JSON.stringify(body) : ''
  const requestTime = Date.now()

  const fetchOptions = {
    method,
    timeout,
    headers: {
      Accept: 'application/json,text/plain;charset=UTF-8,text/plain',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${PRIVATE_KEY}`,
    },
  }


  if (method !== 'GET' && body) {
    fetchOptions.body = bodyString
  }

  try {
    const response = await fetch(apiUrl, fetchOptions)

    if (response.status === HTTP_STATUS_CODE_NOT_FOUND) {
      throw new Error('Api: not found')
    }

    const responseTime = Date.now()
    console.log(`Api -> Call: (${responseTime - requestTime}ms) name:${apiName}; path:${apiUrl}; for page url:${pageUrl};`)

    let result
    try {
      if (response.status === HTTP_STATUS_CODE_NO_CONTENT) {
        result = true
      } else if (HTTP_STATUS_CODES_WITH_CONTENT.includes(response.status)) {
        const isJson = response.headers.get('content-type')?.includes('application/json')

        if (isJson) {
          result = await response.json()
          result = dataTranslator(result)
        } else {
          result = await response.text()
          if (stringIsJson(result)) {
            result = JSON.parse(result)
            result = dataTranslator(result)
          }
        }
      } else {
        result = false
      }

      console.log(`Api -> Parsed: (${Date.now() - responseTime}ms) name:${apiName}; path:${apiUrl}; for page url:${pageUrl};`)
    } catch (error) {
      result = false
      console.error(`Api -> Parse error (${Date.now() - requestTime}ms) name:${apiName}; path:${apiUrl}; message:${error.message}; for page url:${pageUrl};`)
    }

    return [result, response, false]
  } catch (error) {
    const errorResponse = {}

    if (error.message.includes('not found')) {
      errorResponse.status = HTTP_STATUS_CODE_NOT_FOUND
      console.error(`Api -> Not Found: (${Date.now() - requestTime}ms) name:${apiName}; path:${apiUrl}; for page url:${pageUrl};`)
    } else if (error.message.includes('timeout')) {
      errorResponse.status = HTTP_STATUS_CODE_TIMEOUT
      console.error(`Api -> Timeout: (${Date.now() - requestTime}ms) name:${apiName}; path:${apiUrl}; message:${error.message}; for page url:${pageUrl};`)
    } else {
      errorResponse.status = HTTP_STATUS_CODE_SERVER_ERROR
      console.error(`Api -> Error: (${Date.now() - requestTime}ms) name:${apiName}; path:${apiUrl}; message:${error.message}; for page url:${pageUrl};`)
    }

    return [false, errorResponse, error]
  }
}


const RequestApi = {}

Object.keys(Apis).forEach(apiName => {
  RequestApi[apiName] = createApi(Apis[apiName], apiName)
})


export default RequestApi
