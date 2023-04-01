import {FastifyInstance} from 'fastify'
import crypto from 'node:crypto'
import z from 'zod'
import { knex } from '../database'

export async function userRouter(app:FastifyInstance){

    app.get('/',async()=>{
      const table =   await knex('user').select()
      return table
    })

    app.post('/create',async(request,reply)=>{
        const createUserBodySchema = z.object({
          name: z.string()

        })

        const {name} = createUserBodySchema.parse(request.body)
        const id = crypto.randomUUID()

        await knex('user').insert({
          id,
          name

        })
       
        
        return reply.status(201).send('user create')
    })

}