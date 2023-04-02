import { error } from 'console'
import {FastifyRequest,FastifyReply} from 'fastify'

export async function verifySession(request:FastifyRequest,reply:FastifyReply){
    const sessionId = request.cookies.sessionId
   
    if(!sessionId){
        throw new Error('session not found')
    }
}