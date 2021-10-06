import { ListComingSoonMoviesController } from '../../../../presentation/controllers/imdb/list-coming-soon-movies/list-coming-soon-movies-controller'
import { Controller } from '../../../../presentation/protocols'
import { makeLogDecorator } from '../../decorators/log-decorator-factory'
import { makeListComingSoonMoviesApiFactory } from '../../usecases/list-coming-soon-movies/list-coming-soon-movies-api-factory'

export const makeListComingSoonMoviesControllerFactory = (): Controller => {
  return makeLogDecorator(new ListComingSoonMoviesController(makeListComingSoonMoviesApiFactory()))
}
