export async function GET() {
  return Response.json({ 
    message: "🧵 Stitch-QLS API funcionando!", 
    status: "live", 
    timestamp: new Date().toISOString()
  });
}
