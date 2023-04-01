import 'dotenv/config'
import {knex as setupknex} from 'knex'

if(!process.env.DATABASE_URL){
  throw new Error('database_url not found')
}

export const config = {
  client:'sqlite',
  connection:{
    filename: process.env.DATABASE_URL
    },
  useNullAsDefault:true,
  migrations:{
    extends:'ts',
    directory:'./database/migrations'
  }
 }

export const knex = setupknex(config)

