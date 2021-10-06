import { MostPopularMovies } from '../../../../domain/models'
import { ListMostPopularMovies } from '../../../../domain/usecases'
import { ok, serverError } from '../../../helpers/http/http-helper'
import { HttpRequest } from '../../../protocols'
import { ListMostPopularMoviesController } from './list-most-popular-movies-controller'

const makeFakeRequest = (): HttpRequest => ({
  body: {
    lang: 'pt'
  }
})

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

const makeListMostPopularMovies = (): ListMostPopularMovies => {
  class ListMostPopularMoviesStub implements ListMostPopularMovies {
    async list (lang?: string): Promise<MostPopularMovies[]> {
      return await new Promise(resolve => resolve(makeFakeResponse()))
    }
  }

  return new ListMostPopularMoviesStub()
}

interface SutTypes {
  sut: ListMostPopularMoviesController
  listMostPopularMoviesStub: ListMostPopularMovies
}

const makeSut = (): SutTypes => {
  const listMostPopularMoviesStub = makeListMostPopularMovies()
  const sut = new ListMostPopularMoviesController(listMostPopularMoviesStub)
  return {
    sut,
    listMostPopularMoviesStub
  }
}

describe('ListMostPopularMoviesController', () => {
  test('should calls ListMostPopularMovies with correct values', async () => {
    const { sut, listMostPopularMoviesStub } = makeSut()
    const listMostPopularMovies = jest.spyOn(listMostPopularMoviesStub, 'list')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(listMostPopularMovies).toHaveBeenCalledWith(httpRequest.body?.lang)
  })
  test('should return response with statusCode 200', async () => {
    const { sut } = makeSut()
    const httpRequest = makeFakeRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(ok(makeFakeResponse()))
  })
  test('should return 500 if ListMostPopularMovies throws', async () => {
    const { sut, listMostPopularMoviesStub } = makeSut()
    jest.spyOn(listMostPopularMoviesStub, 'list').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const httpRequest = makeFakeRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
