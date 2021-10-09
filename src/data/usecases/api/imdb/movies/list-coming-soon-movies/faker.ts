import { ComingSoonMovies } from '../../../../../../domain/models'

export const responseComingSoonMovies = (): ComingSoonMovies[] => ([
  {
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
  }
])
