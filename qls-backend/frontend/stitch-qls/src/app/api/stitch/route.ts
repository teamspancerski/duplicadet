export async function GET() {
  return Response.json({ 
    success: true,
    message: "🧵 Stitch-QLS API 100% operacional!",
    user: "Jeronimo SP",
    timestamp: new Date().toISOString(),
    endpoints: ["/api/stitch", "/api/auth", "/api/demo"]
  });
}
