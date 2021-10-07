import env from '../../../../main/config/env'
import { Api } from '../../helpers/api'

import { ComingSoonMovies, MostPopularMovies, TheBestMovies } from '../../../../domain/models'
import { ListMostPopularMoviesImdb } from '../../../../data/protocols/api/imdb/list-most-popular-movies-imdb'
import { ListComingSoonMoviesImdb } from '../../../../data/protocols/api/imdb/list-coming-soon-movies-imdb'
import { ListTheBestMoviesImdb } from '../../../../data/protocols/api/imdb/list-the-best-movies-imdb'

import { ListComingSoonMapper, ListMostPopularMapper, ListTheBestMoviesMapper } from './movies-imdb-api-mapper'

export class MoviesImdbApi extends Api implements ListMostPopularMoviesImdb, ListComingSoonMoviesImdb, ListTheBestMoviesImdb {
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
    console.log(response.items)
    return ListComingSoonMapper(response)
  }

  async listTheBest (lang?: string): Promise<TheBestMovies[]> {
    const url = this.getURL({ path: 'Top250Movies', apiKey: env.imdbApiKey, lang })
    const response = await this.get(url.href)
    return ListTheBestMoviesMapper(response)
  }
}
