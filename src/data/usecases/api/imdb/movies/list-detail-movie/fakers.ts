import { DetailMovie } from '../../../../../../domain/models'

export const makeFakeResponse = (): DetailMovie => ({
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
  imDbRating: 8,
  metacriticRating: 8,
  releaseDate: 'valid_release_date',
  actorList: [
    {
      id: 'valid_d',
      asCharacter: 'valid_as_character',
      image: 'valid_image',
      name: 'valid_name'
    }
  ],
  awards: 'valid_awards',
  boxOffice: {
    budget: 'valid_budget',
    cumulativeWorldwideGross: 'valid_cumulative_worldwide_gross',
    grossUSA: 'valid_gross_usa',
    openingWeekendUSA: 'valid_opening_weekend_usa'
  },
  companies: 'valid_companies',
  companyList: [
    {
      id: 'valid_id',
      name: 'valid_name'
    }
  ],
  imDbRatingVotes: 102,
  keywords: 'valid_keywords',
  keywordList: ['valid_keywords_list'],
  originalTitle: 'valid_original_title',
  plotLocal: 'valid_plot_local',
  plotLocalIsRtl: true,
  type: 'valid_type',
  tagline: 'valid_tagline',
  writers: 'valid_writers',
  writerList: [
    {
      id: 'valid_id',
      name: 'valid_name'
    }
  ],
  images: [
    {
      image: 'valid_image',
      title: 'valid_title'
    }
  ],
  similars: [
    {
      id: 'valid_id',
      title: 'valid_title',
      type: 'valid_type',
      year: 2021,
      stars: 'valid_stars',
      image: 'valid_image',
      genres: 'valid_genres',
      directors: 'valid_directors',
      fullTitle: 'valid_full_title',
      imDbRating: 120,
      plot: 'valid_plot'
    }
  ],
  posters: {
    title: 'valid_title',
    imDbId: 'valid_imdb_id',
    fullTitle: 'valid_full_title',
    type: 'valid_type',
    year: 2020,
    backdrops: [
      {
        id: 'valid_link',
        aspectRatio: 1.00000,
        height: 200,
        width: 200,
        language: 'valid_language',
        link: 'valid_link'
      }
    ],
    posters: [
      {
        id: 'valid_link',
        aspectRatio: 1.00000,
        height: 200,
        width: 200,
        language: 'valid_language',
        link: 'valid_link'
      }
    ]
  },
  trailer: {
    title: 'valid_title',
    imDbId: 'valid_imdb_id',
    fullTitle: 'valid_full_title',
    type: 'valid_type',
    year: 2020,
    link: 'valid_link',
    linkEmbed: 'valid_link_embed',
    thumbnailUrl: 'valid_thumbnail_url',
    uploadDate: 'valid_upload_date',
    videoId: 'valid_video_id',
    videoTitle: 'valid_video_title',
    videoDescription: 'valid_video_description'
  }
})
