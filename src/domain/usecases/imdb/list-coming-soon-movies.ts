import { ComingSoonMovies } from '../../models/index'

export interface ListComingSoonMovies {
  list (lang?: string): Promise<ComingSoonMovies[]>
}
