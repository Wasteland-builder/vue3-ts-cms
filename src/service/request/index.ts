import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { EMRequestConfig, EMRequestInterceptors } from './type'

import { ElLoading } from 'element-plus'

const DEAFULT_LOADING = true

class EMRequest {
  instance: AxiosInstance
  interceptors?: EMRequestInterceptors
  showLoading: boolean
  loadingInstance: any

  constructor(config: EMRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loadingInstance = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loadingInstance?.close()

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败~, 错误信息')
        } else {
          return data
        }
      },
      (err) => {
        this.loadingInstance?.close()
        if (err.response.status === 404) {
          console.log('404的错误~')
        }
        return err
      }
    )
  }

  request<T>(config: EMRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            ;(res as unknown as AxiosResponse<any, any>) =
              config.interceptors.responseInterceptor(
                res as unknown as AxiosResponse<any, any>
              )
          }
          this.showLoading = DEAFULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          // 将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: EMRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: EMRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: EMRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: EMRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default EMRequest
