
import { Options } from '../../../../domain/interfaces'
import { DetailMovie } from '../../../../domain/models'
import { ListDetailMovie } from '../../../../domain/usecases'
import { ok, serverError } from '../../../helpers/http/http-helper'
import { makeFakeRequest, makeFakeResponse } from './faker'
import { ListDetailMovieController } from './list-detail-movie-controller'

const makeListDetailMovie = (): ListDetailMovie => {
  class ListDetailMovieStub implements ListDetailMovie {
    async list (options?: Options): Promise<DetailMovie> {
      return await new Promise(resolve => resolve(makeFakeResponse()))
    }
  }

  return new ListDetailMovieStub()
}

interface SutTypes {
  sut: ListDetailMovieController
  listDetailMovieStub: ListDetailMovie
}

const makeSut = (): SutTypes => {
  const listDetailMovieStub = makeListDetailMovie()
  const sut = new ListDetailMovieController(listDetailMovieStub)
  return {
    sut,
    listDetailMovieStub
  }
}

describe('ListDetailMovieController', () => {
  test('should calls ListDetailMovie with correct values', async () => {
    const { sut, listDetailMovieStub } = makeSut()
    const listDetailMovie = jest.spyOn(listDetailMovieStub, 'list')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(listDetailMovie).toHaveBeenCalledWith({ lang: httpRequest.query?.lang, movieId: httpRequest.params?.movieId })
  })

  test('should return response with statusCode 200', async () => {
    const { sut } = makeSut()
    const httpRequest = makeFakeRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(ok(makeFakeResponse()))
  })

  test('should return 500 if ListDetailMovie throws', async () => {
    const { sut, listDetailMovieStub } = makeSut()
    jest.spyOn(listDetailMovieStub, 'list').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const httpRequest = makeFakeRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
