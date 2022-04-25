import { AxiosRequestConfig } from "axios";
interface LimiterConfig {
    proxyUrl: string;
}
declare function getProxy(request: AxiosRequestConfig, config: LimiterConfig): Promise<AxiosRequestConfig<any>>;
export default getProxy;
//# sourceMappingURL=index.d.ts.map