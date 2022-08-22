import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface EMRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface EMRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: EMRequestInterceptors<T>
  showLoading?: boolean
}
