import { ListComingSoonMoviesImdb } from '../../../../data/protocols/api/imdb/list-coming-soon-movies-imdb'
import { ListMostPopularMoviesImdb } from '../../../../data/protocols/api/imdb/list-most-popular-movies-imdb'
import { ComingSoonMovies, MostPopularMovies } from '../../../../domain/models'
import { Api } from '../../helpers/api'
import { MoviesImdbApi } from './movies-imdb-api'

const makeFakeListMostPopularResponse = (): MostPopularMovies[] => (
  [{
    id: 'valid_id',
    crew: 'valid_crew',
    title: 'valid_title',
    year: 2021,
    fullTitle: 'valid_full_title',
    image: 'valid_image',
    rankUpDown: 'valid_rank_up_down',
    imDbRating: 10,
    imDbRatingCount: 100,
    rank: 1
  }]
)

const makeFakeListComingSoonResponse = (): ComingSoonMovies[] => (
  [{
    id: 'valid_id',
    title: 'valid_title',
    year: 2021,
    fullTitle: 'valid_full_title',
    image: 'valid_image',
    imDbRating: 10,
    imDbRatingCount: 100,
    plot: 'valid_plot',
    metacriticRating: 50,
    contentRating: 'valid_content_rating',
    releaseState: 'valid_release_state',
    runtimeMins: 120,
    runtimeStr: 'valid_runtime_str',
    stars: 'valid_stars',
    starList: [
      {
        key: 'valid_key',
        value: 'valid_value'
      }
    ],
    directors: 'valid_directors',
    directorList: [
      {
        key: 'valid_key',
        value: 'valid_value'
      }
    ],
    genres: 'valid_genres',
    genreList: [
      {
        key: 'valid_key',
        value: 'valid_value'
      }
    ]
  }]
)

interface SutTypes {
  sut: MoviesImdbApi
}

const makeSut = (): SutTypes => {
  class MoviesImdbApiStub extends Api implements ListMostPopularMoviesImdb, ListComingSoonMoviesImdb {
    async listComingSoon (lang?: string): Promise<ComingSoonMovies[]> {
      return await new Promise(resolve => resolve(makeFakeListComingSoonResponse()))
    }

    async listMostPopular (lang?: string): Promise<MostPopularMovies[]> {
      return await new Promise(resolve => resolve(makeFakeListMostPopularResponse()))
    }
  }
  const sut = new MoviesImdbApiStub('https://imdb-api.com')
  return {
    sut
  }
}

describe('MoviesImdbApi', () => {
  test('should calls listMostPopular with en lang', async () => {
    const { sut } = makeSut()
    const spyListMostPopular = jest.spyOn(sut, 'listMostPopular')
    await sut.listMostPopular('en')
    expect(spyListMostPopular).toBeCalledWith('en')
  })

  test('should return a list of MostPopularMovies', async () => {
    const { sut } = makeSut()
    const response = await sut.listMostPopular('en')
    expect(response.length).toBeGreaterThanOrEqual(1)
  })

  test('should return a list of ComingSoonMovies', async () => {
    const { sut } = makeSut()
    const response = await sut.listComingSoon('en')
    expect(response.length).toBeGreaterThanOrEqual(1)
  })

  test('should calls ComingSoonMovies with en lang', async () => {
    const { sut } = makeSut()
    const spyListComingSoon = jest.spyOn(sut, 'listComingSoon')
    await sut.listComingSoon('pt')
    expect(spyListComingSoon).toBeCalledWith('pt')
  })
})
