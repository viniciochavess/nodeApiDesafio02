import {FastifyInstance} from 'fastify'

export async function snackRouter(app:FastifyInstance){

    app.get('/',(request,reply)=>{
        
    })

    app.post('/create',(request,reply)=>{

        let sessionId = request.cookies.sessionId
        return sessionId
        
    })

}