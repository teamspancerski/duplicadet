"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = authRoutes;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = require("../lib/prisma");
async function authRoutes(app) {
    // REGISTRO
    app.post("/register", async (request, reply) => {
        const { name, email, password } = request.body;
        const userExists = await prisma_1.prisma.user.findUnique({
            where: { email }
        });
        if (userExists) {
            return reply.status(400).send({ error: "Email already exists" });
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const user = await prisma_1.prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                demoBalance: 10000
            }
        });
        return reply.send({ message: "User created" });
    });
    // LOGIN
    app.post("/login", async (request, reply) => {
        const { email, password } = request.body;
        const user = await prisma_1.prisma.user.findUnique({
            where: { email }
        });
        if (!user) {
            return reply.status(401).send({ error: "Invalid credentials" });
        }
        const passwordMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!passwordMatch) {
            return reply.status(401).send({ error: "Invalid credentials" });
        }
        const token = app.jwt.sign({ id: user.id }, { expiresIn: "7d" });
        return reply.send({ token });
    });
}
