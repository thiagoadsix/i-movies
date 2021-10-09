import { ListDetailMovie } from '../../../../domain/usecases'
import { ok, serverError } from '../../../helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../../protocols'

export class ListDetailMovieController implements Controller {
  constructor (
    private readonly listDetailMovie: ListDetailMovie
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { movieId } = httpRequest?.params
      const lang = httpRequest?.query?.lang
      const response = await this.listDetailMovie.list({ lang, movieId })
      return ok(response)
    } catch (error) {
      return serverError(error)
    }
  }
}
