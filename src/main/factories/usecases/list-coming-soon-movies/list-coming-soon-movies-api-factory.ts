import { MoviesImdbApi } from '../../../../infra/api/imdb/movies/movies-imdb-api'
import { ListComingSoonMovies } from '../../../../domain/usecases'
import { ListComingSoonMoviesApi } from '../../../../data/usecases/list-coming-soon-movies/list-coming-soon-movies-api'

export const makeListComingSoonMoviesApiFactory = (): ListComingSoonMovies => {
  const imdb = new MoviesImdbApi()
  return new ListComingSoonMoviesApi(imdb)
}
