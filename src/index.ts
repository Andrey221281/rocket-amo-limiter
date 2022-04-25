import { AxiosRequestConfig } from "axios";
import { parse } from "qs";

interface LimiterConfig {
  proxyUrl: string;
}

async function getProxy(request: AxiosRequestConfig, config: LimiterConfig) {
  /*
      Необходимо иметь в request: proxyUrl
     */
  let { baseURL, url } = request;
  const { proxyUrl = "" } = config;

  request.params = parse(request.params);
  request.baseURL = proxyUrl;
  request.headers = { ...request.headers, amoUrl: baseURL + url };

  return request;
}
export default getProxy;
