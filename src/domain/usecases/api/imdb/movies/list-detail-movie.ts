import { Options } from '../../interfaces'
import { DetailMovie } from '../../models'

export interface ListDetailMovie {
  list (options?: Options): Promise<DetailMovie>
}
