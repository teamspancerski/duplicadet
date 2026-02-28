export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      {/* Header */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">🧵 Stitch-QLS</h1>
          <a href="/dashboard" className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg transition-all">Dashboard</a>
        </div>
      </nav>
      
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8">
          SaaS Unificado
        </h1>
        <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Frontend Next.js 15 + Vercel. Backend pronto. Banco próximo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/api/stitch" className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-xl rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
            🚀 API Test (200 OK)
          </a>
          <a href="https://vercel.com/teamspancerskis-projects/stitch-qls" className="px-10 py-5 border-2 border-gray-200 text-gray-800 font-semibold text-xl rounded-2xl hover:bg-gray-50 transition-all">
            Dashboard Vercel
          </a>
        </div>
        <p className="mt-12 text-sm text-gray-500">Jeronimo SP | São Paulo | Deploy Live</p>
      </section>
    </main>
  );
}
