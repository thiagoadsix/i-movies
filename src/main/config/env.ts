const user = 'thiago'
const pass = encodeURIComponent('6kK8t#t!bfLGTs8c')
const db = 'i-movies'

export default {
  mongoUrl: process.env.MONGO_URL || `mongodb+srv://${user}:${pass}@i-movies-cluster.8ozed.mongodb.net/${db}?retryWrites=true&w=majority`,
  port: process.env.PORT ?? 5050,
  imdbApiKey: process.env.IMDB_API_KEY ?? 'k_55ui3wlt'
}
