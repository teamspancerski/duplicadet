"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const fastify_1 = __importDefault(require("fastify"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
const cors_1 = __importDefault(require("@fastify/cors"));
const auth_1 = require("./routes/auth");
const demo_1 = require("./routes/demo");
const app = (0, fastify_1.default)({ logger: true });
app.register(cors_1.default, {
    origin: true,
});
app.register(jwt_1.default, {
    secret: process.env.JWT_SECRET || "supersecret"
});
app.register(auth_1.authRoutes);
app.register(demo_1.demoRoutes);
app.get("/", async () => {
    return { ok: true, message: "API rodando 🚀" };
});
app.listen({ port: 3333, host: "0.0.0.0" })
    .then(() => console.log("🚀 Server running"))
    .catch(console.error);
