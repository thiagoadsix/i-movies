import { ComingSoonMovies } from '../../models/imdb/coming-soon-movies'

export interface ListComingSoonMovies {
  list (lang?: string): Promise<ComingSoonMovies[]>
}
