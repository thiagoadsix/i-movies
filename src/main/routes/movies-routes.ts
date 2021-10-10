import { Router } from 'express'

import { adaptRoutes } from '../adapters/express/express-routes-adapter'

import { makeListComingSoonMoviesControllerFactory } from '../factories/controllers/list-coming-soon-movies/list-coming-soon-movies-controller-factory'
import { makeListDetailMovieControllerFactory } from '../factories/controllers/list-detail-movie/list-detail-movie-controller-factory'
import { makeListMostPopularMoviesControllerFactory } from '../factories/controllers/list-most-popular-movies/list-most-popuplar-movies-controller-factory'
import { makeListTheBestMoviesControllerFactory } from '../factories/controllers/list-the-best-movies/list-the-best-movies-controller-factory'

export default (router: Router): void => {
  router.get('/most-popular-movies', adaptRoutes(makeListMostPopularMoviesControllerFactory()))
  router.get('/coming-soon-movies', adaptRoutes(makeListComingSoonMoviesControllerFactory()))
  router.get('/best-movies', adaptRoutes(makeListTheBestMoviesControllerFactory()))
  router.get('/detail-movie/:movieId', adaptRoutes(makeListDetailMovieControllerFactory()))
}
