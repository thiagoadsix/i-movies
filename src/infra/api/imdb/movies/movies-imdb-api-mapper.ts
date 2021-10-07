import { ComingSoonMovies, MostPopularMovies, TheBestMovies } from '../../../../domain/models'

export const ListMostPopularMapper = (movies: { items: any[] }): MostPopularMovies[] => {
  return movies.items.map(movie => {
    return {
      id: movie.id,
      crew: movie.crew,
      fullTitle: movie.fullTitle,
      imDbRating: Number(movie.imDbRating),
      imDbRatingCount: Number(movie.imDbRatingCount),
      image: movie.image,
      rank: Number(movie.rank),
      rankUpDown: movie.rankUpDown,
      title: movie.title,
      year: Number(movie.year)
    }
  })
}

export const ListComingSoonMapper = (movies: {items: any[]}): ComingSoonMovies[] => {
  return movies.items.map(movie => ({
    id: movie.id,
    title: movie.title,
    fullTitle: movie.fullTitle,
    year: Number(movie.year),
    image: movie.image,
    plot: movie.plot,
    runtimeMins: Number(movie.runtimeMins),
    runtimeStr: movie.runtimeStr,
    genres: movie.genres,
    genreList: movie.genreList,
    stars: movie.stars,
    starList: movie.starList,
    releaseState: movie.releaseState,
    directors: movie.directors,
    directorList: movie.directorList,
    imDbRating: Number(movie.imDbRating),
    imDbRatingCount: Number(movie.imDbRatingCount),
    contentRating: movie.contentRating,
    metacriticRating: Number(movie.metacriticRating)
  }))
}

export const ListTheBestMoviesMapper = (movies: {items: any[]}): TheBestMovies[] => {
  return movies.items.map(movie => ({
    ...movie,
    rank: Number(movie.rank),
    year: Number(movie.year),
    imDbRating: Number(movie.imDbRating),
    imDbRatingCount: Number(movie.imDbRatingCount)
  }))
}
