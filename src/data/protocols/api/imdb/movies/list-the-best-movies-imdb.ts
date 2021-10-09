import { TheBestMovies } from '../../../../../domain/models'

export interface ListTheBestMoviesImdb {
  listTheBest (lang?: string): Promise<TheBestMovies[]>
}
