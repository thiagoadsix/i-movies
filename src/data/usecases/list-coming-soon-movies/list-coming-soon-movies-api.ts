import { ComingSoonMovies } from '../../../domain/models'
import { ListComingSoonMovies } from '../../../domain/usecases'
import { ListComingSoonMoviesImdb } from '../../protocols/api/imdb/list-coming-soon-movies-imdb'

export class ListComingSoonMoviesApi implements ListComingSoonMovies {
  constructor (
    private readonly listComingSoonMoviesImdb: ListComingSoonMoviesImdb
  ) {}

  async list (lang?: string): Promise<ComingSoonMovies[]> {
    const comingSoonMovies = await this.listComingSoonMoviesImdb.listComingSoon(lang)
    return comingSoonMovies
  }
}
