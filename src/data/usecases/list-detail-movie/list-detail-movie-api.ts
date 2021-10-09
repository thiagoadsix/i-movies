import { Options } from '../../../domain/interfaces'
import { DetailMovie } from '../../../domain/models'
import { ListDetailMovie } from '../../../domain/usecases'
import { ListDetailMovieImdb } from '../../protocols/api/imdb/movies/list-detail-movie-imdb'

export class ListDetailMovieApi implements ListDetailMovie {
  constructor (
    private readonly listDetailMovieImdb: ListDetailMovieImdb
  ) {}

  async list (options?: Options): Promise<DetailMovie> {
    const movie = await this.listDetailMovieImdb.listDetail(options)
    return movie
  }
}
