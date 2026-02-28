import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
          🧵 Stitch-QLS LIVE!
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
          SaaS unificado rodando no Vercel. Frontend Next.js 100% operacional!
        </p>
        <div className="flex flex-col items-center gap-4">
          <a href="/api/hello" className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 text-lg font-medium text-white shadow-lg hover:shadow-xl transition-all">
            Testar API
          </a>
          <p className="text-sm text-gray-500">Deploy: DgWri9aGF | Jeronimo SP</p>
        </div>
      </div>
    </main>
  );
}
