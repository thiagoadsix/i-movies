import { ListMostPopularMoviesImdb } from '../../../../data/protocols/api/imdb/list-most-popular-movies-imdb'
import { MostPopularMovies } from '../../../../domain/models'

const makeFakeResponse = (): MostPopularMovies[] => (
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

describe('MoviesImdbApi', () => {
  test('should return a list of MostPopularMovies', async () => {
    class MoviesImdbApiStub implements ListMostPopularMoviesImdb {
      async listMostPopular (lang?: string): Promise<MostPopularMovies[]> {
        return await new Promise(resolve => resolve(makeFakeResponse()))
      }
    }
    const moviesImdbApiStub = new MoviesImdbApiStub()
    const response = await moviesImdbApiStub.listMostPopular('en')
    expect(response.length).toBeGreaterThanOrEqual(1)
  })

  test('should calls listMostPopular with en lang', async () => {
    class MoviesImdbApiStub implements ListMostPopularMoviesImdb {
      async listMostPopular (lang?: string): Promise<MostPopularMovies[]> {
        return await new Promise(resolve => resolve(makeFakeResponse()))
      }
    }
    const moviesImdbApiStub = new MoviesImdbApiStub()
    const spyListMostPopular = jest.spyOn(moviesImdbApiStub, 'listMostPopular')
    await moviesImdbApiStub.listMostPopular('en')
    expect(spyListMostPopular).toBeCalledWith('en')
  })
})
