import { AxiosRequestConfig, Method } from "axios";
import { parse } from "qs";

interface LimiterConfig {
  proxyUrl: string;
}

async function getProxy(
  request: AxiosRequestConfig,
  config: LimiterConfig
): Promise<AxiosRequestConfig<any>> {
  /*
      Необходимо иметь в request: proxyUrl
     */
  const { baseURL = "", url = "", params = "" } = request;
  const { proxyUrl = "" } = config;

  request.params = parse(params);
  request.baseURL = proxyUrl;
  request.headers = {
    ...request.headers,
    "amo-url": baseURL + url,
    "amo-method": request.method as string,
  };
  request.method = "post";

  return request;
}
export default getProxy;
