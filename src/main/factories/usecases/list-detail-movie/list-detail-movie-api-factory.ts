import { MoviesImdbApi } from '../../../../infra/api/imdb/movies/movies-imdb-api'
import { ListDetailMovie } from '../../../../domain/usecases'
import { ListDetailMovieApi } from '../../../../data/usecases/list-detail-movie/list-detail-movie-api'

export const makeListDetailMovieApiFactory = (): ListDetailMovie => {
  const imdb = new MoviesImdbApi()
  return new ListDetailMovieApi(imdb)
}
