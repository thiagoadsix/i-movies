import env from './config/env'
import { Mongo } from '../infra/db/mongo-db/helpers/mongo'

Mongo.connect(env.mongoUrl).then(async () => {
  const app = (await import('./config/app')).default
  app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
}).catch(console.error)
