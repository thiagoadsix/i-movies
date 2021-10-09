import { Options } from '../../../../domain/interfaces'
import { DetailMovie } from '../../../../domain/models'
import { ListDetailMovieImdb } from '../../../protocols/api/imdb/movies/list-detail-movie-imdb'
import { makeFakeResponse } from './fakers'
import { ListDetailMovieApi } from './list-detail-movie-api'

const makeListDetailMovieImdb = (): ListDetailMovieImdb => {
  class ListDetailMovieImdbStub implements ListDetailMovieImdb {
    async listDetail (options?: Options): Promise<DetailMovie> {
      return await new Promise(resolve => resolve(makeFakeResponse()))
    }
  }

  return new ListDetailMovieImdbStub()
}

interface SutTypes {
  sut: ListDetailMovieApi
  listDetailMovieImdbStub: ListDetailMovieImdb
}

const makeSut = (): SutTypes => {
  const listDetailMovieImdbStub = makeListDetailMovieImdb()
  const sut = new ListDetailMovieApi(listDetailMovieImdbStub)
  return {
    sut,
    listDetailMovieImdbStub
  }
}

describe('ListDetailMovieApi Usecase', () => {
  test('should call ListDetailMovieImdb with option lang', async () => {
    const { sut, listDetailMovieImdbStub } = makeSut()
    const listDetailSpy = jest.spyOn(listDetailMovieImdbStub, 'listDetail')
    await sut.list({
      lang: 'en'
    })
    expect(listDetailSpy).toHaveBeenCalledWith({ lang: 'en' })
  })

  test('should call ListMostPopularMoviesImdb without options', async () => {
    const { sut, listDetailMovieImdbStub } = makeSut()
    const listDetailSpy = jest.spyOn(listDetailMovieImdbStub, 'listDetail')
    await sut.list(undefined)
    expect(listDetailSpy).toHaveBeenCalledWith(undefined)
  })
})
