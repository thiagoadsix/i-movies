import { MostPopularMovies } from '../../../../../../domain/models'
import { ListMostPopularMoviesImdb } from '../../../../../protocols/api/imdb/movies/list-most-popular-movies-imdb'
import { responeMostPopuparMovies } from './faker'
import { ListMostPopularMoviesApi } from './list-most-popular-movies-api'

const makeListPopularMoviesImdb = (): ListMostPopularMoviesImdb => {
  class ListMostPopularMoviesImdbStub implements ListMostPopularMoviesImdb {
    async listMostPopular (lang?: string): Promise<MostPopularMovies[]> {
      return await new Promise(resolve => resolve(responeMostPopuparMovies()))
    }
  }
  return new ListMostPopularMoviesImdbStub()
}

interface StuTypes {
  sut: ListMostPopularMoviesApi
  listMostPopularMoviesImdbStub: ListMostPopularMoviesImdb
}

const makeSut = (): StuTypes => {
  const listMostPopularMoviesImdbStub = makeListPopularMoviesImdb()
  const sut = new ListMostPopularMoviesApi(listMostPopularMoviesImdbStub)

  return {
    sut,
    listMostPopularMoviesImdbStub
  }
}

describe('ListMostPopularMoviesApi Usecase', () => {
  test('should call ListMostPopularMoviesImdb with lang', async () => {
    const { sut, listMostPopularMoviesImdbStub } = makeSut()
    const listSpy = jest.spyOn(listMostPopularMoviesImdbStub, 'listMostPopular')
    await sut.list('en')
    expect(listSpy).toHaveBeenCalledWith('en')
  })

  test('should call ListMostPopularMoviesImdb without lang', async () => {
    const { sut, listMostPopularMoviesImdbStub } = makeSut()
    const listSpy = jest.spyOn(listMostPopularMoviesImdbStub, 'listMostPopular')
    await sut.list(undefined)
    expect(listSpy).toHaveBeenCalledWith(undefined)
  })
})
