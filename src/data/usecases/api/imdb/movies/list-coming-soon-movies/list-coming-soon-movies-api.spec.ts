import { ComingSoonMovies } from '../../../../../../domain/models'
import { ListComingSoonMoviesImdb } from '../../../../../protocols/api/imdb/movies/list-coming-soon-movies-imdb'
import { ListComingSoonMoviesApi } from './list-coming-soon-movies-api'

const responseComingSoonMovies = (): ComingSoonMovies[] => ([
  {
    id: 'valid_id',
    fullTitle: 'valid_full_title',
    title: 'valid_title',
    year: 2021,
    image: 'valid_image',
    plot: 'valid_plot',
    runtimeMins: 120,
    runtimeStr: 'valid_runtime_str',
    directors: 'valid_directors',
    directorList: [
      {
        id: 'valid_id',
        name: 'valid_name'
      }
    ],
    stars: 'valid_stars',
    starList: [
      {
        id: 'valid_id',
        name: 'valid_name'
      }
    ],
    genres: 'valid_genres',
    genreList: [
      {
        key: 'valid_key',
        value: 'valid_value'
      }
    ],
    contentRating: 'valid_content_rating',
    imDbRatingCount: 100,
    imDbRating: 8,
    metacriticRating: 8,
    releaseState: 'valid_release_state'
  }
])

const makeListComingSoonImdb = (): ListComingSoonMoviesImdb => {
  class ListComingSoonMoviesImdbStub implements ListComingSoonMoviesImdb {
    async listComingSoon (lang?: string): Promise<ComingSoonMovies[]> {
      return await new Promise(resolve => resolve(responseComingSoonMovies()))
    }
  }
  return new ListComingSoonMoviesImdbStub()
}

interface StuTypes {
  sut: ListComingSoonMoviesApi
  listComingSoonMoviesImdbStub: ListComingSoonMoviesImdb
}

const makeSut = (): StuTypes => {
  const listComingSoonMoviesImdbStub = makeListComingSoonImdb()
  const sut = new ListComingSoonMoviesApi(listComingSoonMoviesImdbStub)

  return {
    sut,
    listComingSoonMoviesImdbStub
  }
}

describe('ListComingSoonMoviesApi Usecase', () => {
  test('should call ListComingSoonMoviesImdb with lang', async () => {
    const { sut, listComingSoonMoviesImdbStub } = makeSut()
    const listSpy = jest.spyOn(listComingSoonMoviesImdbStub, 'listComingSoon')
    await sut.list('en')
    expect(listSpy).toHaveBeenCalledWith('en')
  })

  test('should call ListMostPopularMoviesImdb without lang', async () => {
    const { sut, listComingSoonMoviesImdbStub } = makeSut()
    const listSpy = jest.spyOn(listComingSoonMoviesImdbStub, 'listComingSoon')
    await sut.list(undefined)
    expect(listSpy).toHaveBeenCalledWith(undefined)
  })
})
