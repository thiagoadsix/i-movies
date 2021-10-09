import { MoviesImdbApi } from '../../../../infra/api/imdb/movies/movies-imdb-api'
import { ListMostPopularMovies } from '../../../../domain/usecases'
import { ListMostPopularMoviesApi } from '../../../../data/usecases/api/imdb/movies/list-most-popular-movies/list-most-popular-movies-api'

export const makeListMostPopularMoviesApiFactory = (): ListMostPopularMovies => {
  const imdb = new MoviesImdbApi()
  return new ListMostPopularMoviesApi(imdb)
}
