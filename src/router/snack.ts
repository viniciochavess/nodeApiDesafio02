import {FastifyInstance} from 'fastify'
import {knex} from '../database'
import {createSessionIdUser} from '../middlewares/create-session-id-user'
import {verifySession} from '../middlewares/verify-session'
import { z } from 'zod'
import crypto from 'node:crypto'

export async function snackRouter(app:FastifyInstance){

    app.get('/',(request,reply)=>{
        
    })

    app.post('/create', {preHandler:verifySession} ,async(request,reply)=>{

        const createSnackSchema = z.object({
            name:z.string(),
            description:z.string(),
            diet:z.boolean()
        })

        const sessionId = request.cookies.sessionId
        const {name,description,diet} = createSnackSchema.parse(request.body)
        console.table({
            name,
            description,
            diet
        })
 
         await knex('snack').insert({
            id:crypto.randomUUID(),
            name,
            description,
            diet,
            user_id:sessionId
         })
        reply.status(201).send('snack create')
    })

}