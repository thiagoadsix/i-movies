import { MostPopularMovies } from '../../../../../../domain/models'

export const responeMostPopuparMovies = (): MostPopularMovies[] => ([{
  id: 'valid_id',
  title: 'valid_title',
  fullTitle: 'valid_full_title',
  crew: 'valid_crew',
  image: 'valid_image',
  imDbRating: 10,
  imDbRatingCount: 100,
  rank: 9.5,
  rankUpDown: 'valid_rank_up_down',
  year: 2000
}])
