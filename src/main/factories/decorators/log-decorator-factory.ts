import { LogMongoRepository } from '../../../infra/db/mongo-db/log-repository/log-mongo-db-repository'
import { Controller } from '../../../presentation/protocols'
import { LogDecorator } from '../../decorators/log-decorator'

export const makeLogDecorator = (controller: Controller): Controller => {
  const logMongoRepository = new LogMongoRepository()
  return new LogDecorator(controller, logMongoRepository)
}
