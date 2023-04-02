import {FastifyInstance} from 'fastify'
import {knex} from '../database'
import {createSessionIdUser} from '../middlewares/create-session-id-user'
import {verifySession} from '../middlewares/verify-session'
import { boolean, string, z } from 'zod'
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

    app.patch('/update/:idSnack',{preHandler:verifySession},async(request,reply)=>{
        const sessionId = request.cookies.sessionId

        const requestParamsSchema = z.object({
            idSnack:string()
        });
        const requestBodySchema = z.object({
            name:string(),
            description:string(),
            diet:boolean()
        })
       
        const {idSnack} = requestParamsSchema.parse(request.params)
       

        const {name,description,diet} = requestBodySchema.parse(request.body)

       
       
       const snackOne = await knex('snack').where({
        id:idSnack,
        user_id:sessionId
       }).first()

       console.log(snackOne)

       if(snackOne){
            await knex('snack').update({
                name,
                description,
                diet,
               

            }).where({
                id:idSnack,
                user_id:sessionId
            })
       }else{
        reply.status(401).send('not found')
       }
       
    })

}