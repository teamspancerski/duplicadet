export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="text-center">
        <h1 className="mb-8 text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent drop-shadow-2xl">
          🧵 Stitch-QLS
        </h1>
        <p className="mb-12 text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          SaaS unificado Next.js + Vercel. Frontend 100% operacional!
        </p>
        <a href="/api/stitch" className="inline-flex px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
          🚀 Testar API
        </a>
        <p className="mt-4 text-sm text-gray-500">Jeronimo SP | Live no Vercel</p>
      </div>
    </main>
  );
}
