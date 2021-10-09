import { MostPopularMovies } from '../../../domain/models'
import { ListMostPopularMovies } from '../../../domain/usecases'
import { ListMostPopularMoviesImdb } from '../../protocols/api/imdb/movies/list-most-popular-movies-imdb'

export class ListMostPopularMoviesApi implements ListMostPopularMovies {
  constructor (private readonly listMostPopularMoviesImdb: ListMostPopularMoviesImdb) {}

  async list (lang?: string): Promise<MostPopularMovies[]> {
    const movies = await this.listMostPopularMoviesImdb.listMostPopular(lang)
    return movies
  }
}
