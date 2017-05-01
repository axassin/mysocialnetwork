import jwt from 'koa-jwt'

const koaJwt = jwt({ secret: '12345'})

export default koaJwt