import { ListComingSoonMovies } from '../../../../domain/usecases'
import { ok, serverError } from '../../../helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../../protocols'

export class ListComingSoonMoviesController implements Controller {
  constructor (
    private readonly listComingSoonMovies: ListComingSoonMovies
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const lang = httpRequest.body?.lang
      const response = await this.listComingSoonMovies.list(lang)
      return ok(response)
    } catch (error) {
      return serverError(error)
    }
  }
}
