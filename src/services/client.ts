import { Client } from '../models/Client'
import { CreationAttributes } from 'sequelize/types/model'
import { ClientRepository } from '../repositories/client.repository'
import { HashUtils } from '../utils/hash'

const create = async (data: CreationAttributes<Client>): Promise<Client> => {
  const HashedPassword = await HashUtils.hash(data.password)

  data = {
    ...data,
    password: HashedPassword
  }

  const createdClient = await ClientRepository.create(data)

  return createdClient
}

const getById = async (id: string): Promise<Client | null> => {
  const foundClient = await ClientRepository.selectOne({
    where: { id }
  })

  return foundClient
}

export const ClientService = {
  create,
  getById
}
