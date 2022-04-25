import { AxiosRequestConfig } from 'axios';
declare function getProxy(request: AxiosRequestConfig): Promise<AxiosRequestConfig<any>>;
export default getProxy;
