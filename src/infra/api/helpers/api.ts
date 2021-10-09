import { URL } from 'url'
import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

interface paramsUrl {
  apiKey: string
  lang?: string
  path: string
}

export abstract class Api {
  constructor (private readonly endpoint: string) {}

  private async axios (): Promise<AxiosInstance> {
    return Axios.create()
  }

  protected getURL ({ lang, path, apiKey }: paramsUrl): URL {
    if (lang) {
      return new URL(`${this.endpoint}/${lang}/API/${path}/${apiKey}`)
    }
    return new URL(`${this.endpoint}/en/API/${path}/${apiKey}`)
  }

  protected async get (url: string, config?: AxiosRequestConfig): Promise<any> {
    const axios = await this.axios()
    console.log(`Calling the endpoint API: ${url}`)
    return await axios.get(url, config).then(response => response.data)
  }

  protected async post (url: string, request?: any, config?: AxiosRequestConfig): Promise<any> {
    const axios = await this.axios()
    return await axios.post(url, request, config).then(response => response.data)
  }

  protected async delete (url: string, config?: AxiosRequestConfig): Promise<any> {
    const axios = await this.axios()
    return await axios.delete(url, config).then(response => response.data)
  }

  protected async put (url: string, request?: any, config?: AxiosRequestConfig): Promise<any> {
    const axios = await this.axios()
    return await axios.put(url, request, config).then(response => response.data)
  }

  protected async patch (url: string, request?: any, config?: AxiosRequestConfig): Promise<any> {
    const axios = await this.axios()
    return await axios.patch(url, request, config).then(response => response.data)
  }
}
