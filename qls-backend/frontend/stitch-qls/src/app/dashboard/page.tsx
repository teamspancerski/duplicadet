export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">📊 Stitch-QLS Dashboard</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Status</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-green-600 font-medium">✅ Frontend Live</div>
              <div className="flex items-center gap-3 text-blue-600 font-medium">🔄 Backend Pronto</div>
              <div className="flex items-center gap-3 text-yellow-600 font-medium">⚡ Banco Next</div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-2xl text-white shadow-2xl">
            <h2 className="text-2xl font-semibold mb-4">Próximos</h2>
            <ul className="space-y-2">
              <li>1. Deploy Backend Vercel</li>
              <li>2. Prisma + PlanetScale</li>
              <li>3. Clerk Auth</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
