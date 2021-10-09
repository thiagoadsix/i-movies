import { TheBestMovies } from '../../../domain/models'
import { ListTheBestMovies } from '../../../domain/usecases'
import { ListTheBestMoviesImdb } from '../../protocols/api/imdb/list-the-best-movies-imdb'

export class ListTheBestMoviesApi implements ListTheBestMovies {
  constructor (private readonly listTheBestMoviesImdb: ListTheBestMoviesImdb) {}

  async list (lang?: string): Promise<TheBestMovies[]> {
    const movies = await this.listTheBestMoviesImdb.listTheBest(lang)
    return movies
  }
}
