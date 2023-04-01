
import {knex as setupknex} from 'knex'

export const config = {
  client:'sqlite',
  connection:{
    filename:'./src/database/app.db'
    },
  useNullAsDefault:true,
  migrations:{
    extends:'ts',
    directory:'./src/database/migrations'
  }
 }

export const knex = setupknex(config)

