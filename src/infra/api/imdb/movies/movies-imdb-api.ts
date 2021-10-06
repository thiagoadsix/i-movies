import env from '../../../../main/config/env'
import { Api } from '../../helpers/api'

import { ComingSoonMovies, MostPopularMovies } from '../../../../domain/models'
import { ListMostPopularMoviesImdb } from '../../../../data/protocols/api/imdb/list-most-popular-movies-imdb'
import { ListComingSoonMapper, ListMostPopularMapper } from './movies-imdb-api-mapper'
import { ListComingSoonMoviesImdb } from '../../../../data/protocols/api/imdb/list-coming-soon-movies-imdb'

export class MoviesImdbApi extends Api implements ListMostPopularMoviesImdb, ListComingSoonMoviesImdb {
  constructor () {
    super('https://imdb-api.com')
  }

  async listMostPopular (lang?: string): Promise<MostPopularMovies[]> {
    const url = this.getURL({ path: 'MostPopularMovies', apiKey: env.imdbApiKey, lang })
    const response = await this.get(url.href)
    return ListMostPopularMapper(response)
  }

  async listComingSoon (lang?: string): Promise<ComingSoonMovies[]> {
    const url = this.getURL({ path: 'ComingSoon', apiKey: env.imdbApiKey, lang })
    const response = await this.get(url.href)
    return ListComingSoonMapper(response)
  }
}
