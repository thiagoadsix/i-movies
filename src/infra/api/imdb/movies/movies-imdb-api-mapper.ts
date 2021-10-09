import { ComingSoonMovies, DetailMovie, MostPopularMovies, TheBestMovies } from '../../../../domain/models'

export const ListMostPopularMapper = (movies: { items: any[] }): MostPopularMovies[] => {
  return movies.items.map(movie => {
    return {
      ...movie,
      imDbRating: Number(movie?.imDbRating),
      imDbRatingCount: Number(movie?.imDbRatingCount),
      rank: Number(movie?.rank),
      year: Number(movie?.year)
    }
  })
}

export const ListComingSoonMapper = (movies: {items: any[]}): ComingSoonMovies[] => {
  return movies.items.map(movie => ({
    ...movie,
    year: Number(movie?.year),
    runtimeMins: Number(movie?.runtimeMins),
    imDbRating: Number(movie?.imDbRating),
    imDbRatingCount: Number(movie?.imDbRatingCount),
    metacriticRating: Number(movie?.metacriticRating)
  }))
}

export const ListTheBestMoviesMapper = (movies: {items: any[]}): TheBestMovies[] => {
  return movies.items.map(movie => ({
    ...movie,
    rank: Number(movie?.rank),
    year: Number(movie?.year),
    imDbRating: Number(movie?.imDbRating),
    imDbRatingCount: Number(movie?.imDbRatingCount)
  }))
}

export const ListDetailMovieMapper = (movie: any): DetailMovie => ({
  ...movie,
  year: Number(movie?.year),
  runtimeMins: Number(movie?.runtimeMins),
  imDbRating: Number(movie?.imDbRating),
  imDbRatingVotes: Number(movie?.imDbRatingVotes),
  metacriticRating: Number(movie?.metacriticRating),
  similars: [{
    ...movie?.similars,
    year: Number(movie?.similars.year),
    imDbRating: Number(movie?.similars.imDbRating)
  }],
  trailer: {
    ...movie?.trailer,
    year: Number(movie?.trailer.year)
  },
  posters: {
    ...movie?.posters,
    year: Number(movie?.year),
    posters: [{
      ...movie?.posters.posters,
      aspectRatio: Number(movie?.posters.posters.aspectRatio),
      width: Number(movie?.posters.posters.width),
      height: Number(movie?.posters.posters.height)
    }],
    backdrops: [{
      ...movie?.posters.backdrops,
      aspectRatio: Number(movie?.posters.backdrops.aspectRatio),
      width: Number(movie?.posters.backdrops.width),
      height: Number(movie?.posters.backdrops.height)
    }]
  }
})
