import { ComingSoonMovies } from '../../../../../../domain/models'
import { ListComingSoonMoviesImdb } from '../../../../../protocols/api/imdb/movies/list-coming-soon-movies-imdb'
import { responseComingSoonMovies } from './faker'
import { ListComingSoonMoviesApi } from './list-coming-soon-movies-api'

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
