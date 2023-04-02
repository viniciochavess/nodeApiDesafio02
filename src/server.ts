import fastify from 'fastify'
import {userRouter} from './router/user'
const app = fastify()
import cookie from '@fastify/cookie'

app.register(cookie)
app.register(userRouter,{
    prefix:'user'
})



app.listen({
    port:3333,

}).then(()=>{
    console.log('server is running')
})