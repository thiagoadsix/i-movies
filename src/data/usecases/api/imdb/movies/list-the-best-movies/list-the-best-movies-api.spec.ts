import { TheBestMovies } from '../../../../../../domain/models'
import { ListTheBestMoviesImdb } from '../../../../../protocols/api/imdb/movies/list-the-best-movies-imdb'
import { responeTheBestMovies } from './faker'
import { ListTheBestMoviesApi } from './list-the-best-movies-api'

const makeListTheBestMoviesImdb = (): ListTheBestMoviesImdb => {
  class ListTheBestMoviesImdbStub implements ListTheBestMoviesImdb {
    async listTheBest (lang?: string): Promise<TheBestMovies[]> {
      return await new Promise(resolve => resolve(responeTheBestMovies()))
    }
  }
  return new ListTheBestMoviesImdbStub()
}

interface StuTypes {
  sut: ListTheBestMoviesApi
  listTheBestMoviesImdbStub: ListTheBestMoviesImdb
}

const makeSut = (): StuTypes => {
  const listTheBestMoviesImdbStub = makeListTheBestMoviesImdb()
  const sut = new ListTheBestMoviesApi(listTheBestMoviesImdbStub)

  return {
    sut,
    listTheBestMoviesImdbStub
  }
}

describe('ListTheBestMoviesApi Usecase', () => {
  test('should call ListTheBestMoviesImdb with lang', async () => {
    const { sut, listTheBestMoviesImdbStub } = makeSut()
    const listSpy = jest.spyOn(listTheBestMoviesImdbStub, 'listTheBest')
    await sut.list('en')
    expect(listSpy).toHaveBeenCalledWith('en')
  })

  test('should call ListTheBestMoviesImdb without lang', async () => {
    const { sut, listTheBestMoviesImdbStub } = makeSut()
    const listSpy = jest.spyOn(listTheBestMoviesImdbStub, 'listTheBest')
    await sut.list(undefined)
    expect(listSpy).toHaveBeenCalledWith(undefined)
  })
})
