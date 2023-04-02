import{FastifyRequest, FastifyReply} from 'fastify'
import { knex } from '../database'
import {z} from 'zod'
export async function verifyUserExist(request:FastifyRequest,reply:FastifyReply){

    const verifyCreateUser = z.object({
        name: z.string()
    })
    const {name} = verifyCreateUser.parse(request.body)

   const userExist = await knex('user').where({
        name
    })

  
    if(userExist.length > 0){
        return reply.status(401).send({
            "error":"user exist"
        })
    }
}