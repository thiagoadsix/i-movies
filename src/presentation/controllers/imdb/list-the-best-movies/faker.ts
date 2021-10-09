import { TheBestMovies } from '../../../../domain/models'
import { HttpRequest } from '../../../protocols'

export const makeFakeRequest = (): HttpRequest => ({
  body: {
    lang: 'pt'
  }
})

export const makeFakeResponse = (): TheBestMovies[] => ([
  {
    id: 'valid_id',
    title: 'valid_title',
    fullTitle: 'valid_full_title',
    crew: 'valid_crew',
    image: 'valid_image',
    imDbRating: 10,
    imDbRatingCount: 100,
    rank: 9.5,
    year: 2000
  }
])
