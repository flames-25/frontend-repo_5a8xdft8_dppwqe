import { useState } from 'react'

export default function Docs() {
  const [query, setQuery] = useState('')

  return (
    <div className="min-h-screen bg-[#0b0f17] text-gray-200">
      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Documentation</h1>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search docs..."
            className="bg-white/5 border border-white/10 rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mt-10">
          <aside className="lg:col-span-1 space-y-2">
            {['Getting Started','API Reference','Authentication','Customization','Deployment'].map((item) => (
              <a key={item} href={`#${item.replace(/\s+/g,'-').toLowerCase()}`} className="block px-3 py-2 rounded hover:bg-white/5">
                {item}
              </a>
            ))}
          </aside>

          <main className="lg:col-span-3 space-y-12">
            <section id="getting-started">
              <h2 className="text-2xl font-semibold text-white">Getting Started</h2>
              <p className="mt-2 text-gray-300">Install via Composer, richte deine Datenbank ein und starte den Server.</p>
              <pre className="mt-4 p-4 bg-black/50 border border-white/10 rounded text-cyan-200 text-sm overflow-auto">{`composer require coredeck/coredeck\nphp artisan coredeck:install\nphp artisan migrate`}</pre>
            </section>

            <section id="api-reference">
              <h2 className="text-2xl font-semibold text-white">API Reference</h2>
              <p className="mt-2 text-gray-300">Vollständige REST- und GraphQL-Endpoints mit Parametern und Beispielen.</p>
              <pre className="mt-4 p-4 bg-black/50 border border-white/10 rounded text-cyan-200 text-sm overflow-auto">{`GET /v1/content/{type}\nPOST /v1/content/{type}\nPOST /graphql`}</pre>
            </section>

            <section id="authentication">
              <h2 className="text-2xl font-semibold text-white">Authentication</h2>
              <p className="mt-2 text-gray-300">JWT oder OAuth 2.0 mit Token-basiertem Zugriff.</p>
              <pre className="mt-4 p-4 bg-black/50 border border-white/10 rounded text-cyan-200 text-sm overflow-auto">{`Authorization: Bearer <token>`}</pre>
            </section>

            <section id="customization">
              <h2 className="text-2xl font-semibold text-white">Customization</h2>
              <p className="mt-2 text-gray-300">Definiere eigene Content-Typen, Felder und Relationen.</p>
              <pre className="mt-4 p-4 bg-black/50 border border-white/10 rounded text-cyan-200 text-sm overflow-auto">{`type Article {\n  id: ID!\n  title: String!\n  body: String!\n  tags: [String!]\n}`}</pre>
            </section>

            <section id="deployment">
              <h2 className="text-2xl font-semibold text-white">Deployment</h2>
              <p className="mt-2 text-gray-300">Docker Compose und Hosting-Leitfäden.</p>
              <pre className="mt-4 p-4 bg-black/50 border border-white/10 rounded text-cyan-200 text-sm overflow-auto">{`docker compose up -d`}</pre>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
