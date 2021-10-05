import env from '../../../../main/config/env'
import { Api } from '../../helpers/api'

import { MostPopularMovies } from '../../../../domain/models'
import { ListMostPopularMoviesImdb } from '../../../../data/protocols/api/imdb/list-most-popular-movies-imdb'
import { ListMostPopularMapper } from './movies-imdb-api-mapper'

export class MoviesImdbApi extends Api implements ListMostPopularMoviesImdb {
  constructor () {
    super('https://imdb-api.com')
  }

  async listMostPopular (lang?: string): Promise<MostPopularMovies[]> {
    const url = this.getURL({ path: 'MostPopularMovies', apiKey: env.imdbApiKey, lang })
    const response = await this.get(url.href)
    return ListMostPopularMapper(response)
  }
}
