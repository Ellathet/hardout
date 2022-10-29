import { Table, Model, CreatedAt, UpdatedAt, DeletedAt, DataType, Column, PrimaryKey } from 'sequelize-typescript'

@Table({
  timestamps: true,
  paranoid: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
})
export class Client extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
    id: string

  @Column({
    type: DataType.STRING,
    comment: 'Client name'
  })
    name: string

  @Column({
    type: DataType.STRING,
    comment: 'Client email'
  })
    email: string

  @Column({
    type: DataType.STRING,
    comment: 'Client password'
  })
    password: string

  @Column({
    type: DataType.STRING,
    comment: 'Client cpf'
  })
    cpf: string

  @CreatedAt
    createdAt: Date

  @UpdatedAt
    updatedAt: Date

  @DeletedAt
    deletedAt: Date
}
