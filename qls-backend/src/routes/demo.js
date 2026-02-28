"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoRoutes = demoRoutes;
const prisma_1 = require("../lib/prisma");
const auth_1 = require("../middlewares/auth");
async function demoRoutes(app) {
    // SALDO DEMO
    app.get("/balance", { preHandler: [auth_1.authenticate] }, async (request) => {
        const userId = request.user.id;
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: userId }
        });
        return { balance: user?.demoBalance };
    });
    // EXECUTAR TRADE DEMO
    app.post("/trade", { preHandler: [auth_1.authenticate] }, async (request) => {
        const { pnl } = request.body;
        const userId = request.user.id;
        const updatedUser = await prisma_1.prisma.user.update({
            where: { id: userId },
            data: {
                demoBalance: {
                    increment: pnl
                }
            }
        });
        return { newBalance: updatedUser.demoBalance };
    });
}
