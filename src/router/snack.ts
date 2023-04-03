import {FastifyInstance} from 'fastify'
import {knex} from '../database'
import {createSessionIdUser} from '../middlewares/create-session-id-user'
import {verifySession} from '../middlewares/verify-session'
import { boolean, string, z } from 'zod'
import crypto from 'node:crypto'

export async function snackRouter(app:FastifyInstance){

    app.get('/list/:idSnack?',{preHandler:verifySession},async(request,reply)=>{
        const sessionId = request.cookies.sessionId
        const {idSnack} =  request.params
        if(idSnack){
           const result = await knex('snack').where({
                id:idSnack,
                user_id:sessionId
            }).first()

            reply.status(201).send(result)
            
        }else{
           const result = await knex('snack').where({
                user_id:sessionId
            })
            return result
        }
     

        
    })

    app.get('/dashboard',{preHandler:verifySession},async(request,reply)=>{
        const sessionId = request.cookies.sessionId

        const result = await knex('snack').where({
            user_id:sessionId
        })
        const snackTotal = result.length
        const snackDietTrue = result.filter((diet)=>{
            return diet.diet == 1
            
        })
        const snackDietFalse = result.filter((diet)=>{
            return diet.diet == 0
            
        })
       
    
        function getDays(){
            let days = []
            let contagem = 0;
            let contagemLoop = 0;
            snackDietTrue.forEach((snack)=>{
                
                let day =  (new Date(snack.created_at).getDate())
                days.push(day)
            })
            for(let i = 0; i < days.length; i++){
                    if(days[i]+1 == days[i+1]){
                        if(contagemLoop >= contagem  ){
                            contagem++
                        }
                        contagemLoop++
                      
                    }else{
                        contagemLoop = 0
                        
                    }
            }
           
            return ++contagem
        }
        

        return {
                "sequence":getDays(),
                "snackTotal":snackTotal,
                "snackDietTrue":snackDietTrue.length,
                "snackDietFalse":snackDietFalse.length,
                result
        }

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

    app.delete('/delete/:idSnack',{preHandler:verifySession},async(request,reply)=>{
        const sessionId = request.cookies.sessionId
        const requestParamsSchema = z.object({
            idSnack:string()
        });
        const {idSnack} = requestParamsSchema.parse(request.params)
       const result =  await knex('snack').delete().where({
            id:idSnack,
            user_id:sessionId
        })

        if(result){
            reply.status(201).send('deletado com sucesso!!!')
        }else{
            reply.status(401)
        }

    })

}