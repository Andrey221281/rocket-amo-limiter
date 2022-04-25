import { AxiosRequestConfig } from 'axios'
import { parse } from 'qs'

async function getProxy(request: AxiosRequestConfig) {
    /*
      Необходимо иметь в request: baseURL, url
     */
    let { baseURL, url } = request

    request.params = parse(request.params)
    request.baseURL = 'http://localhost:3300/proxy/catch'
    request.headers = { ...request.headers, amoUrl: baseURL + url }

    return request
}
export default getProxy
