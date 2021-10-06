import { Router } from 'express'
import { adaptRoutes } from '../adapters/express/express-routes-adapter'
import { makeListComingSoonMoviesControllerFactory } from '../factories/controllers/list-coming-soon-movies/list-coming-soon-movies-controller-factory'
import { makeListMostPopularMoviesControllerFactory } from '../factories/controllers/list-most-popular-movies/list-most-popuplar-movies-controller-factory'

export default (router: Router): void => {
  router.get('/most-popular-movies', adaptRoutes(makeListMostPopularMoviesControllerFactory()))
  router.get('/coming-soon-movies', adaptRoutes(makeListComingSoonMoviesControllerFactory()))
}
