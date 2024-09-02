import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      email: 'vinimriberio@gmail.com'
      name: 'Vinicius'
    }
  }
}
