import { ListTheBestMoviesApi } from '../../../../data/usecases/api/list-the-best-movies/list-the-best-movies-api'
import { MoviesImdbApi } from '../../../../infra/api/imdb/movies/movies-imdb-api'
import { ListTheBestMovies } from '../../../../domain/usecases'

export const makeListTheBestMoviesApiFactory = (): ListTheBestMovies => {
  const imdb = new MoviesImdbApi()
  return new ListTheBestMoviesApi(imdb)
}
