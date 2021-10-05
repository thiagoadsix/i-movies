import { MostPopularMovies } from '../../../../domain/models'

export interface ListMostPopularMoviesImdb {
  listMostPopular (lang?: string): Promise<MostPopularMovies[]>
}
