import path from 'path'
import { Dialect } from 'sequelize'
import { Sequelize } from 'sequelize-typescript'
import { getEnv } from '../utils/env'

const sequelizeDbName = getEnv<string>('SEQUELIZE_DB_NAME')
const sequelizeDbUser = getEnv<string>('SEQUELIZE_DB_USER')
const sequelizeDbHost = getEnv<string>('SEQUELIZE_DB_HOST')
const sequelizeDbDialect = getEnv<Dialect>('SEQUELIZE_DB_DIALECT')
const sequelizeDbPassword = getEnv<string>('SEQUELIZE_DB_PASSWORD')

const sequelizeConnection = new Sequelize({
  database: sequelizeDbName,
  username: sequelizeDbUser,
  host: sequelizeDbHost,
  dialect: sequelizeDbDialect,
  password: sequelizeDbPassword
})

sequelizeConnection.addModels([path.resolve(__dirname, '../models')])

export { sequelizeConnection }
