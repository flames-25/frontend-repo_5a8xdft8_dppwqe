import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, BookOpen, Code2, Shield, SlidersHorizontal, Server } from 'lucide-react'

const sections = [
  {
    id: 'getting-started',
    icon: BookOpen,
    title: 'Getting Started',
    body: (
      <>
        <p className="mt-2 text-gray-300">Installiere das Paket, richte deine Umgebung ein und starte in Minuten.</p>
        <pre className="mt-4 p-4 bg-black/50 border border-white/10 rounded text-cyan-200 text-sm overflow-auto">{`composer require coredeck/coredeck\nphp artisan coredeck:install\nphp artisan migrate`}</pre>
      </>
    ),
  },
  {
    id: 'api-reference',
    icon: Code2,
    title: 'API Reference',
    body: (
      <>
        <p className="mt-2 text-gray-300">Vollständige REST- und GraphQL-Endpoints mit Parametern, Filtern und Paginierung.</p>
        <pre className="mt-4 p-4 bg-black/50 border border-white/10 rounded text-cyan-200 text-sm overflow-auto">{`GET /v1/content/{type}?limit=10&offset=0\nPOST /v1/content/{type}\nPOST /graphql`}</pre>
      </>
    ),
  },
  {
    id: 'authentication',
    icon: Shield,
    title: 'Authentication',
    body: (
      <>
        <p className="mt-2 text-gray-300">JWT oder OAuth 2.0 mit Token-basiertem Zugriff und Rollen/Scopes.</p>
        <pre className="mt-4 p-4 bg-black/50 border border-white/10 rounded text-cyan-200 text-sm overflow-auto">{`Authorization: Bearer <token>`}</pre>
      </>
    ),
  },
  {
    id: 'customization',
    icon: SlidersHorizontal,
    title: 'Customization',
    body: (
      <>
        <p className="mt-2 text-gray-300">Definiere Content-Typen, Felder, Validierungen und Relationen – vollständig typisiert.</p>
        <pre className="mt-4 p-4 bg-black/50 border border-white/10 rounded text-cyan-200 text-sm overflow-auto">{`type Article {\n  id: ID!\n  title: String!\n  body: String!\n  tags: [String!]\n}`}</pre>
      </>
    ),
  },
  {
    id: 'deployment',
    icon: Server,
    title: 'Deployment',
    body: (
      <>
        <p className="mt-2 text-gray-300">Docker Compose, CI/CD und skalierbares Hosting.</p>
        <pre className="mt-4 p-4 bg-black/50 border border-white/10 rounded text-cyan-200 text-sm overflow-auto">{`docker compose up -d`}</pre>
      </>
    ),
  },
]

export default function Docs() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return sections
    return sections.filter((s) =>
      s.title.toLowerCase().includes(q) ||
      (typeof s.body === 'string' ? s.body.toLowerCase().includes(q) : false)
    )
  }, [query])

  return (
    <div className="min-h-screen bg-[#0b0f17] text-gray-200 relative">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* hero header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
            <BookOpen className="h-3.5 w-3.5" /> Docs
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">CoreDeck Documentation</h1>
          <p className="text-gray-300 max-w-2xl">Alles, was du brauchst, um CoreDeck in Produktion zu bringen – von der Installation bis zur Skalierung.</p>
        </motion.div>

        {/* search */}
        <div className="mt-6 flex items-center gap-3">
          <div className="relative w-full md:w-2/3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search docs..."
              className="w-full pl-10 pr-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mt-10">
          {/* sidebar */}
          <aside className="lg:col-span-1 space-y-2 sticky top-24 self-start">
            {sections.map(({ id, title }) => (
              <a
                key={id}
                href={`#${id}`}
                className="block px-3 py-2 rounded border border-transparent hover:border-white/10 hover:bg-white/5 transition-colors"
              >
                {title}
              </a>
            ))}
          </aside>

          {/* content */}
          <main className="lg:col-span-3 space-y-10">
            {filtered.map(({ id, icon: Icon, title, body }, idx) => (
              <motion.section
                key={id}
                id={id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-cyan-400" />
                  <h2 className="text-2xl font-semibold text-white">{title}</h2>
                </div>
                {body}
              </motion.section>
            ))}
          </main>
        </div>
      </div>
    </div>
  )
}
