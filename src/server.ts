import fastify from 'fastify'
import {userRouter} from './router/user'
const app = fastify()


app.register(userRouter,{
    prefix:'user'
})



app.listen({
    port:3333,

}).then(()=>{
    console.log('server is running')
})