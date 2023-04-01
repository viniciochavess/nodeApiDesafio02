import {FastifyInstance} from 'fastify'
import { knex } from '../database'

export async function userRouter(app:FastifyInstance){

    app.get('/',async()=>{
      const table =   await knex('user').select()
      return table
    })

}