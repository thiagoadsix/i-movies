interface GenreList {
  key: string
  value: string
}

interface DirectorList {
  id: string
  name: string
}

interface StarsList {
  id: string
  name: string
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
  starList: StarsList[]
}
