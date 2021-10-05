import { ServerError } from '../../errors'
import { HttpResponse } from '../../protocols'

export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error
  }
}

export const serverError = (error: Error | any): HttpResponse => {
  return {
    statusCode: 500,
    body: new ServerError(error.stack)
  }
}

export const ok = (data: any): HttpResponse => {
  return {
    statusCode: 200,
    body: data
  }
}

export const noContent = (): HttpResponse => {
  return {
    statusCode: 204,
    body: null
  }
}
