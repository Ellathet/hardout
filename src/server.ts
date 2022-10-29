import express from 'express';
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()

app.listen(3025, () => {
  console.log(`Server is running ${3025}`)
})