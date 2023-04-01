
import {knex as setupknex} from 'knex'

export const config = {
  client:'sqlite',
  connection:{
    filename:'./database/app.db'
    },
  useNullAsDefault:true,
  migrations:{
    extends:'ts',
    directory:'./database/migrations'
  }
 }

export const knex = setupknex(config)

