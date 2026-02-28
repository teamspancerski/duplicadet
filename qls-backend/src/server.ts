import "dotenv/config"
import Fastify from "fastify"
import jwt from "@fastify/jwt"
import cors from "@fastify/cors"

import { authRoutes } from "./routes/auth"
import { demoRoutes } from "./routes/demo"

const app = Fastify({ logger: true })

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: process.env.JWT_SECRET || "supersecret"
})

app.register(authRoutes)
app.register(demoRoutes)

app.get("/", async () => {
  return { ok: true, message: "API rodando 🚀" }
})
app.listen({ port: 3333, host: "0.0.0.0" })
  .then(() => console.log("🚀 Server running"))
  .catch(console.error)