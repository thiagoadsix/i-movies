import { MostPopularMovies } from '../../../../domain/models'

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
