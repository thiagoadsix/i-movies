import { ListTheBestMoviesController } from '../../../../presentation/controllers/imdb/list-the-best-movies/list-the-best-movies-controller'
import { Controller } from '../../../../presentation/protocols'
import { makeLogDecorator } from '../../decorators/log-decorator-factory'
import { makeListTheBestMoviesApiFactory } from '../../usecases/list-the-best-movies/list-the-best-movies-api-factory'

export const makeListTheBestMoviesControllerFactory = (): Controller => {
  return makeLogDecorator(new ListTheBestMoviesController(makeListTheBestMoviesApiFactory()))
}
