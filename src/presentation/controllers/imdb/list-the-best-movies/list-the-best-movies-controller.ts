import { ListTheBestMovies } from '../../../../domain/usecases'
import { ok, serverError } from '../../../helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../../protocols'

export class ListTheBestMoviesController implements Controller {
  constructor (
    private readonly listTheBestMovies: ListTheBestMovies
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const lang = httpRequest.body?.lang
      const response = await this.listTheBestMovies.list(lang)
      return ok(response)
    } catch (error) {
      return serverError(error)
    }
  }
}
