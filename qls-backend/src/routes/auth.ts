import { FastifyInstance } from "fastify"
import bcrypt from "bcryptjs"
import { prisma } from "../lib/prisma"

export async function authRoutes(app: FastifyInstance) {

  // REGISTRO
  app.post("/register", async (request, reply) => {
    const { name, email, password } = request.body as any

    const userExists = await prisma.user.findUnique({
      where: { email }
    })

    if (userExists) {
      return reply.status(400).send({ error: "Email already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        demoBalance: 10000
      }
    })

    return reply.send({ message: "User created" })
  })


  // LOGIN
  app.post("/login", async (request, reply) => {
    const { email, password } = request.body as any

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return reply.status(401).send({ error: "Invalid credentials" })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return reply.status(401).send({ error: "Invalid credentials" })
    }

    const token = app.jwt.sign(
      { id: user.id },
      { expiresIn: "7d" }
    )

    return reply.send({ token })
  })

}