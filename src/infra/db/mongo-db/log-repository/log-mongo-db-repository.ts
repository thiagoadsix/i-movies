import { ErrorDetails, LogErrorRepository } from '../../../../data/protocols/db/log/log-error-repository'
import { Mongo } from '../helpers/mongo'

export class LogMongoRepository implements LogErrorRepository {
  async logError ({ controller, stack }: ErrorDetails): Promise<void> {
    const errorCollection = await Mongo.getCollection('errors')
    await errorCollection.insertOne({
      stack,
      controller,
      createdAt: new Date()
    })
  }
}
