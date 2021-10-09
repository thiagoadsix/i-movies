import { MostPopularMovies } from '../../../../models'

export interface ListMostPopularMovies {
  list (lang?: string): Promise<MostPopularMovies[]>
}
