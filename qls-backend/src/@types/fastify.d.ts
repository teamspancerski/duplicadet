import "@fastify/jwt"

declare module "fastify" {
  interface FastifyInstance {
    jwt: any
  }

  interface FastifyRequest {
    jwtVerify: any
    user: any
  }
}