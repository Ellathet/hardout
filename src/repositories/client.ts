import { CreationAttributes, FindOptions, SaveOptions, UpdateOptions, DestroyOptions } from 'sequelize/types/model'
import { Client } from '../models/Client'

async function create (data: CreationAttributes<Client>, options?: SaveOptions): Promise<Client> {
  const newClient = Client.build(data)

  const createdClient = await newClient.save(options)

  return createdClient
}

async function selectOne (options: FindOptions): Promise<Client | null> {
  const foundClient = await Client.findOne(options)

  return foundClient
}

async function selectAll (options?: FindOptions): Promise<Client[]> {
  const foundClients = await Client.findAll(options)

  return foundClients
}

async function update (data: Client, options: UpdateOptions): Promise<Client> {
  const updatedClient = await Client.update(data, {
    ...options,
    returning: true
  })

  return updatedClient[1][0]
}

async function destroy (options: DestroyOptions): Promise<void> {
  await Client.destroy(options)
}

export const ClientRepository = {
  create,
  selectOne,
  selectAll,
  update,
  destroy
}
