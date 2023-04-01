import {FastifyInstance} from 'fastify'

export async function userRouter(app:FastifyInstance){

    app.get('/',()=>{
        return 'teste'
    })

}