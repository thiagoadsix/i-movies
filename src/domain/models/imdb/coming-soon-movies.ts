interface GenreList {
  key: string
  value: string
}

interface DirectorList {
  key: string
  value: string
}

interface StarsList {
  key: string
  value: string
}

export interface ComingSoonMovies {
  id: string
  title: string
  fullTitle: string
  year: number
  releaseState: string
  image: string
  runtimeMins: number
  runtimeStr: string
  plot: string
  contentRating: string
  imDbRating: number
  imDbRatingCount: number
  metacriticRating: number
  genres: string
  genreList: GenreList[]
  directors: string
  directorList: DirectorList[]
  stars: string
  starsList: StarsList[]
}
