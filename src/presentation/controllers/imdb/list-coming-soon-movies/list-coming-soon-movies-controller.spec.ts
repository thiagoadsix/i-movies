import { ComingSoonMovies } from '../../../../domain/models'
import { ListComingSoonMovies } from '../../../../domain/usecases'
import { ok, serverError } from '../../../helpers/http/http-helper'
import { HttpRequest } from '../../../protocols'
import { ListComingSoonMoviesController } from './list-coming-soon-movies-controller'

const makeFakeRequest = (): HttpRequest => ({
  body: {
    lang: 'pt'
  }
})

const makeFakeResponse = (): ComingSoonMovies[] => (
  [{
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
  }]
)

const makeListComingSoonMovies = (): ListComingSoonMovies => {
  class ListComingSoonMoviesStub implements ListComingSoonMovies {
    async list (lang?: string): Promise<ComingSoonMovies[]> {
      return await new Promise(resolve => resolve(makeFakeResponse()))
    }
  }

  return new ListComingSoonMoviesStub()
}

interface SutTypes {
  sut: ListComingSoonMoviesController
  listComingSoonMoviesStub: ListComingSoonMovies
}

const makeSut = (): SutTypes => {
  const listComingSoonMoviesStub = makeListComingSoonMovies()
  const sut = new ListComingSoonMoviesController(listComingSoonMoviesStub)
  return {
    sut,
    listComingSoonMoviesStub
  }
}

describe('ListComingSoonMoviesController', () => {
  test('should calls ListComingSoonMovies with correct values', async () => {
    const { sut, listComingSoonMoviesStub } = makeSut()
    const listComingSoonMovies = jest.spyOn(listComingSoonMoviesStub, 'list')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(listComingSoonMovies).toHaveBeenCalledWith(httpRequest.body?.lang)
  })

  test('should return response with statusCode 200', async () => {
    const { sut } = makeSut()
    const httpRequest = makeFakeRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(ok(makeFakeResponse()))
  })

  test('should return 500 if ListComingSoonMovies throws', async () => {
    const { sut, listComingSoonMoviesStub } = makeSut()
    jest.spyOn(listComingSoonMoviesStub, 'list').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const httpRequest = makeFakeRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
