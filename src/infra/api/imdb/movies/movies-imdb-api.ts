import env from '../../../../main/config/env'

import { Options } from '../../../../domain/interfaces'
import { ComingSoonMovies, DetailMovie, MostPopularMovies, TheBestMovies } from '../../../../domain/models'
import { ListMostPopularMoviesImdb } from '../../../../data/protocols/api/imdb/list-most-popular-movies-imdb'
import { ListComingSoonMoviesImdb } from '../../../../data/protocols/api/imdb/list-coming-soon-movies-imdb'
import { ListTheBestMoviesImdb } from '../../../../data/protocols/api/imdb/list-the-best-movies-imdb'
import { ListDetailMovieImdb } from '../../../../data/protocols/api/imdb/list-detail-movie-imdb'

import { Api } from '../../helpers/api'

import { ListComingSoonMapper, ListDetailMovieMapper, ListMostPopularMapper, ListTheBestMoviesMapper } from './movies-imdb-api-mapper'

export class MoviesImdbApi extends Api implements ListMostPopularMoviesImdb, ListComingSoonMoviesImdb, ListTheBestMoviesImdb, ListDetailMovieImdb {
  constructor () {
    super('https://imdb-api.com')
  }

  async listDetail (options?: Options): Promise<DetailMovie> {
    const { lang, movieId } = options
    const url = this.getURL({ path: 'Title', lang, apiKey: env.imdbApiKey })
    const urlConcatenedWithParams = url.toString().concat(`/${movieId}/Posters&Trailer&Images&FullActor`)
    const response = await this.get(urlConcatenedWithParams)
    return ListDetailMovieMapper(response)
  }

  async listMostPopular (lang?: string): Promise<MostPopularMovies[]> {
    const url = this.getURL({ path: 'MostPopularMovies', apiKey: env.imdbApiKey, lang })
    const response = await this.get(url.href)
    return ListMostPopularMapper(response)
  }

  async listComingSoon (lang?: string): Promise<ComingSoonMovies[]> {
    const url = this.getURL({ path: 'ComingSoon', apiKey: env.imdbApiKey, lang })
    const response = await this.get(url.href)
    console.log(response.items)
    return ListComingSoonMapper(response)
  }

  async listTheBest (lang?: string): Promise<TheBestMovies[]> {
    const url = this.getURL({ path: 'Top250Movies', apiKey: env.imdbApiKey, lang })
    const response = await this.get(url.href)
    return ListTheBestMoviesMapper(response)
  }
}
