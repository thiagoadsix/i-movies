import { ListTheBestMovies } from '../../../../domain/usecases'
import { TheBestMovies } from '../../../../domain/models'

import { ok, serverError } from '../../../helpers/http/http-helper'

import { ListTheBestMoviesController } from './list-the-best-movies-controller'
import { makeFakeRequest, makeFakeResponse } from './faker'

const makeListTheBestMoviesStub = (): ListTheBestMovies => {
  class ListTheBestMoviesStub implements ListTheBestMovies {
    async list (lang?: string): Promise<TheBestMovies[]> {
      return await new Promise(resolve => resolve(makeFakeResponse()))
    }
  }

  return new ListTheBestMoviesStub()
}

interface SutTypes {
  sut: ListTheBestMoviesController
  listTheBestMoviesStub: ListTheBestMovies
}

const makeSut = (): SutTypes => {
  const listTheBestMoviesStub = makeListTheBestMoviesStub()
  const sut = new ListTheBestMoviesController(listTheBestMoviesStub)

  return {
    sut,
    listTheBestMoviesStub
  }
}

describe('ListTheBestController', () => {
  test('should calls ListMostPopularMovies with correct values', async () => {
    const { sut, listTheBestMoviesStub } = makeSut()
    const listTheBestMovies = jest.spyOn(listTheBestMoviesStub, 'list')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(listTheBestMovies).toHaveBeenCalledWith(httpRequest.body?.lang)
  })

  test('should return response with statusCode 200', async () => {
    const { sut } = makeSut()
    const response = await sut.handle(makeFakeRequest())
    expect(response).toEqual(ok(makeFakeResponse()))
  })

  test('should return 500 if ListMostPopularMovies throws', async () => {
    const { sut, listTheBestMoviesStub } = makeSut()
    jest.spyOn(listTheBestMoviesStub, 'list').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const response = await sut.handle(makeFakeRequest())
    expect(response).toEqual(serverError(new Error()))
  })
})
