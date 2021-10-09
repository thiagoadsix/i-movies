import { Controller } from '../../../../presentation/protocols'
import { ListDetailMovieController } from '../../../../presentation/controllers/imdb/list-detail-movie/list-detail-movie-controller'
import { makeLogDecorator } from '../../decorators/log-decorator-factory'
import { makeListDetailMovieApiFactory } from '../../usecases/list-detail-movie/list-detail-movie-api-factory'

export const makeListDetailMovieControllerFactory = (): Controller => {
  return makeLogDecorator(new ListDetailMovieController(makeListDetailMovieApiFactory()))
}
