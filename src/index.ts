import { AxiosRequestConfig } from "axios";
import { parse } from "qs";

interface LimiterConfig {
  proxyUrl: string;
}

async function getProxy(request: AxiosRequestConfig, config: LimiterConfig) {
  /*
      Необходимо иметь в request: proxyUrl
     */
  let { baseURL = "", url = "", method = "get", params = "" } = request;
  const { proxyUrl = "" } = config;

  request.params = parse(params);
  request.baseURL = proxyUrl;
  request.headers = {
    ...request.headers,
    "amo-url": baseURL + url,
    "amo-method": method,
  };
  request.method = "post";

  return request;
}
export default getProxy;
