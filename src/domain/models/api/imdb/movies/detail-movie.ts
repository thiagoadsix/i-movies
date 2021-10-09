interface GenreList {
  key: string
  value: string
}

interface DirectorList {
  id: string
  name: string
}

interface WriterList {
  id: string
  name: string
}

interface StarsList {
  id: string
  name: string
}

interface ActorList {
  id: string
  image: string
  name: string
  asCharacter: string
}

interface CompanyList {
  id: string
  name: string
}

interface BackdropsData {
  id: string
  link: string
  aspectRatio: number
  language: string
  width: number
  height: number
}

interface PostersData {
  id: string
  link: string
  aspectRatio: number
  language: string
  width: number
  height: number
}

interface Posters {
  imDbId: string
  title: string
  fullTitle: string
  type: string
  year: number
  posters: PostersData[]
  backdrops: BackdropsData[]
}

interface ImagesList {
  title: string
  image: string
}

interface Trailer {
  imDbId: string
  title: string
  fullTitle: string
  type: string
  year: number
  videoId: string
  videoTitle: string
  videoDescription: string
  thumbnailUrl: string
  uploadDate: string
  link: string
  linkEmbed: string
}

interface BoxOffice {
  budget: string
  openingWeekendUSA: string
  grossUSA: string
  cumulativeWorldwideGross: string
}

interface Similars {
  id: string
  title: string
  fullTitle: string
  type: string
  year: number
  image: string
  plot: string
  directors: string
  stars: string
  genres: string
  imDbRating: number
}

export interface DetailMovie {
  id: string
  title: string
  originalTitle: string
  fullTitle: string
  type: string
  year: number
  posters?: Posters
  releaseDate: string
  image: string
  runtimeMins: number
  runtimeStr: string
  plot: string
  plotLocal: string
  plotLocalIsRtl: boolean
  awards: string
  contentRating: string
  imDbRating: number
  imDbRatingVotes: number
  metacriticRating: number
  genres: string
  genreList: GenreList[]
  directors: string
  directorList: DirectorList[]
  writers: string
  writerList: WriterList[]
  stars: string
  starList: StarsList[]
  actorList: ActorList[]
  companies: string
  companyList: CompanyList[]
  images?: ImagesList[]
  trailer?: Trailer
  boxOffice: BoxOffice
  tagline: string
  keywords: string
  keywordList: string[]
  similars: Similars[]
}
