import { Options } from '../../../../../domain/interfaces'
import { DetailMovie } from '../../../../../domain/models'

export interface ListDetailMovieImdb {
  listDetail (options?: Options): Promise<DetailMovie>
}
