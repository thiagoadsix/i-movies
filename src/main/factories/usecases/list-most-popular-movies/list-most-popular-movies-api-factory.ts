import { ListMostPopularMoviesApi } from '../../../../data/usecases/api/list-most-popular-movies/list-most-popular-movies-api'
import { MoviesImdbApi } from '../../../../infra/api/imdb/movies/movies-imdb-api'
import { ListMostPopularMovies } from '../../../../domain/usecases'

export const makeListMostPopularMoviesApiFactory = (): ListMostPopularMovies => {
  const imdb = new MoviesImdbApi()
  return new ListMostPopularMoviesApi(imdb)
}
