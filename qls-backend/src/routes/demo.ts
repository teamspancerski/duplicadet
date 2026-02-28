import { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"
import { authenticate } from "../middlewares/auth"

export async function demoRoutes(app: FastifyInstance) {

  // SALDO DEMO
  app.get("/balance", { preHandler: [authenticate] }, async (request: any) => {

    const userId = request.user.id

    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    return { balance: user?.demoBalance }
  })


  // EXECUTAR TRADE DEMO
  app.post("/trade", { preHandler: [authenticate] }, async (request: any) => {

    const { pnl } = request.body
    const userId = request.user.id

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        demoBalance: {
          increment: pnl
        }
      }
    })

    return { newBalance: updatedUser.demoBalance }
  })

}