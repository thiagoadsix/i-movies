import { TheBestMovies } from '../../../../models'

export interface ListTheBestMovies {
  list (lang?: string): Promise<TheBestMovies[]>
}
