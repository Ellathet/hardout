import crypto from 'crypto'
import { getEnv } from './env'

const SECRET_PASSWORD = getEnv<string>('SECRET_PASSWORD')

const hash = async (plainText: string): Promise<string> => {
  return crypto.createHmac('sha256', SECRET_PASSWORD)
    .update(plainText)
    .digest('hex')
}

const verifyHash = async (hashText: string, plainText: string): Promise<boolean> => {
  const generatedHash = await hash(plainText)

  return generatedHash === hashText
}

export const HashUtils = {
  hash,
  verifyHash
}
