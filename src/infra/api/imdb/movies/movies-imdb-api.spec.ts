import { Options } from '../../../../domain/interfaces'
import { ComingSoonMovies, DetailMovie, MostPopularMovies, TheBestMovies } from '../../../../domain/models'
import { ListComingSoonMoviesImdb } from '../../../../data/protocols/api/imdb/movies/list-coming-soon-movies-imdb'
import { ListDetailMovieImdb } from '../../../../data/protocols/api/imdb/movies/list-detail-movie-imdb'
import { ListMostPopularMoviesImdb } from '../../../../data/protocols/api/imdb/movies/list-most-popular-movies-imdb'
import { ListTheBestMoviesImdb } from '../../../../data/protocols/api/imdb/movies/list-the-best-movies-imdb'

import { Api } from '../../helpers/api'

import { makeFakeListComingSoonResponse, makeFakeListMostPopularResponse, makeFakeListTheBestResponse, makeFakeListDetailResponse } from './fakers'
import { MoviesImdbApi } from './movies-imdb-api'

interface SutTypes {
  sut: MoviesImdbApi
}

const makeSut = (): SutTypes => {
  class MoviesImdbApiStub extends Api implements ListMostPopularMoviesImdb, ListComingSoonMoviesImdb, ListTheBestMoviesImdb, ListDetailMovieImdb {
    async listDetail (options?: Options): Promise<DetailMovie> {
      return await new Promise(resolve => resolve(makeFakeListDetailResponse()))
    }

    async listTheBest (lang?: string): Promise<TheBestMovies[]> {
      return await new Promise(resolve => resolve(makeFakeListTheBestResponse()))
    }

    async listComingSoon (lang?: string): Promise<ComingSoonMovies[]> {
      return await new Promise(resolve => resolve(makeFakeListComingSoonResponse()))
    }

    async listMostPopular (lang?: string): Promise<MostPopularMovies[]> {
      return await new Promise(resolve => resolve(makeFakeListMostPopularResponse()))
    }
  }
  const sut = new MoviesImdbApiStub('https://imdb-api.com')
  return {
    sut
  }
}

describe('MoviesImdbApi', () => {
  test('should calls listMostPopular with en lang', async () => {
    const { sut } = makeSut()
    const spyListMostPopular = jest.spyOn(sut, 'listMostPopular')
    await sut.listMostPopular('en')
    expect(spyListMostPopular).toBeCalledWith('en')
  })

  test('should return a list of MostPopularMovies with en lang', async () => {
    const { sut } = makeSut()
    const response = await sut.listMostPopular('en')
    expect(response.length).toBeGreaterThanOrEqual(1)
  })

  test('should return a list of ComingSoonMovies', async () => {
    const { sut } = makeSut()
    const response = await sut.listComingSoon('en')
    expect(response.length).toBeGreaterThanOrEqual(1)
  })

  test('should calls ComingSoonMovies with pt lang', async () => {
    const { sut } = makeSut()
    const spyListComingSoon = jest.spyOn(sut, 'listComingSoon')
    await sut.listComingSoon('pt')
    expect(spyListComingSoon).toBeCalledWith('pt')
  })

  test('should return a list of TheBestMovies', async () => {
    const { sut } = makeSut()
    const response = await sut.listTheBest('en')
    expect(response.length).toBeGreaterThanOrEqual(1)
  })

  test('should calls TheBestMovies with pt lang', async () => {
    const { sut } = makeSut()
    const spyListTheBest = jest.spyOn(sut, 'listTheBest')
    await sut.listTheBest('pt')
    expect(spyListTheBest).toBeCalledWith('pt')
  })

  test('should return a object of DetailMovie', async () => {
    const { sut } = makeSut()
    const response = await sut.listDetail({ lang: 'en' })
    expect(response).toHaveProperty('id', 'valid_id')
  })

  test('should calls DetailMovie with es lang', async () => {
    const { sut } = makeSut()
    const spyListTheBest = jest.spyOn(sut, 'listDetail')
    await sut.listDetail({ lang: 'en' })
    expect(spyListTheBest).toBeCalledWith({ lang: 'en' })
  })
})
