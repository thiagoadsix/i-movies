import { Collection } from 'mongodb'
import { Mongo } from '../helpers/mongo'
import { LogMongoRepository } from './log-mongo-db-repository'

const makeSut = (): LogMongoRepository => {
  return new LogMongoRepository()
}

describe('Log MongoDB Repository', () => {
  let errorCollection: Collection

  beforeAll(async () => {
    await Mongo.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await Mongo.disconnect()
  })

  beforeEach(async () => {
    errorCollection = await Mongo.getCollection('errors')
    await errorCollection.deleteMany({})
  })

  test('should create an error log on success', async () => {
    const sut = makeSut()
    await sut.logError({ stack: 'any_error' })
    const count = await errorCollection.countDocuments()
    expect(count).toBe(1)
  })
})
