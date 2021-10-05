import { Router } from 'express'
import { adaptRoutes } from '../adapters/express/express-routes-adapter'
import { makeListMostPopularMoviesControllerFactory } from '../factories/controllers/list-most-popular-movies/list-most-popuplar-movies-controller-factory'

export default (router: Router): void => {
  router.get('/movies', adaptRoutes(makeListMostPopularMoviesControllerFactory()))
}
