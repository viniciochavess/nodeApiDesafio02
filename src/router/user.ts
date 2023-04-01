import {FastifyInstance} from 'fastify'
import crypto from 'node:crypto'
import { knex } from '../database'

export async function userRouter(app:FastifyInstance){

    app.get('/',async()=>{
      const table =   await knex('user').select()
      return table
    })

    app.post('/create',(request,reply)=>{
        const {name} = request.body
        const id = crypto.randomUUID()
        console.log(id)
        return name
    })

}