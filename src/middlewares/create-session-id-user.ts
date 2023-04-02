import {FastifyRequest, FastifyReply} from 'fastify'
import {z} from 'zod'
import {knex} from '../database'

export async function createSessionIdUser(request:FastifyRequest, reply:FastifyReply){

    const createSessionIdUser = z.object({
        name: z.string()
    })

    const {name} = createSessionIdUser.parse(request.body)
    

    const userExist = await knex('user').where({name}).first()
    
    
  
  if(userExist.name == name){
    let sessionId = userExist.id
      
        reply.cookie('sessionId',sessionId,{
          path:'/',
          maxAge:1000*60*60*24*1 // 1 day
    
        })

            

       
    }
    
    
}