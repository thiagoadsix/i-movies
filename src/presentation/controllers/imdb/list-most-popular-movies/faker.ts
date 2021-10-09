import { MostPopularMovies } from '../../../../domain/models'
import { HttpRequest } from '../../../protocols'

export const makeFakeRequest = (): HttpRequest => ({
  body: {
    lang: 'pt'
  }
})

export const makeFakeResponse = (): MostPopularMovies[] => (
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
