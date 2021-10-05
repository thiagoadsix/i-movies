import { ListMostPopularMovies } from '../../../domain/usecases'
import { ok, serverError } from '../../helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class ListMostPopularMoviesController implements Controller {
  constructor (
    private readonly listMostPopularMovies: ListMostPopularMovies
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const lang = httpRequest.body?.lang
      const listMostPopularMovies = await this.listMostPopularMovies.list(lang)
      return ok(listMostPopularMovies)
    } catch (error) {
      return serverError(error)
    }
  }
}
