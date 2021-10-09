import { ComingSoonMovies } from '../../../../models'

export interface ListComingSoonMovies {
  list (lang?: string): Promise<ComingSoonMovies[]>
}
