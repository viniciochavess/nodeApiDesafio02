import {FastifyInstance} from 'fastify'
import crypto from 'node:crypto'
import z from 'zod'
import { knex } from '../database'
import { verifyUserExist } from '../middlewares/verify-user-exist'
import { createSessionIdUser } from '../middlewares/create-session-id-user'

export async function userRouter(app:FastifyInstance){

    app.get('/',async()=>{
      const table =   await knex('user').select()
      return table
    })

    app.post('/create',{preHandler:verifyUserExist},async(request,reply)=>{
   
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

    app.post('/login',{preHandler:createSessionIdUser},(request,reply)=>{

      let sessionId = request.cookies.sessionId
      console.log(sessionId)

      return reply.status(201).send('create session')

      
    })

}