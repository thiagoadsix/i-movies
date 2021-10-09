import { ListMostPopularMoviesController } from '../../../../presentation/controllers/imdb/list-most-popular-movies/list-most-popular-movies-controller'
import { Controller } from '../../../../presentation/protocols'
import { makeLogDecorator } from '../../decorators/log-decorator-factory'
import { makeListMostPopularMoviesApiFactory } from '../../usecases/list-most-popular-movies/list-most-popular-movies-api-factory'

export const makeListMostPopularMoviesControllerFactory = (): Controller => {
  return makeLogDecorator(new ListMostPopularMoviesController(makeListMostPopularMoviesApiFactory()))
}
