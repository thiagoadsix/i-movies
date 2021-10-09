import { ComingSoonMovies } from '../../../../domain/models'

export interface ListComingSoonMoviesImdb {
  listComingSoon (lang?: string): Promise<ComingSoonMovies[]>
}
