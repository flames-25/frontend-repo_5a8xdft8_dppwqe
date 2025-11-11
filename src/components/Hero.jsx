import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-[#0b0f17] text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              CoreDeck: The Decoupled PHP Content Backbone.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-lg text-gray-300 max-w-2xl"
            >
              Flexible API-Driven Content Management, Powered by Laravel/Symfony.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 space-y-3 text-gray-200"
            >
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                <span>High Performance: Gebaut auf modernem PHP 8.x für Geschwindigkeit.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                <span>Framework Native: Nahtlose Integration in Laravel/Symfony.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                <span>Security First: Token-basierte Authentifizierung und skalierbare Sicherheit.</span>
              </li>
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href="/docs"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-3 rounded-md transition-colors"
              >
                Get Started in Minutes
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/features" className="text-gray-300 hover:text-white">Learn more</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8 p-4 rounded-lg bg-white/5 border border-white/10"
            >
              <pre className="text-cyan-200 text-sm overflow-auto">
{`# REST example
curl -H "Authorization: Bearer <token>" \
  https://api.coredeck.io/v1/content/articles?limit=10

# GraphQL example
authHeader = { Authorization: "Bearer <token>" }
fetch('https://api.coredeck.io/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', ...authHeader },
  body: JSON.stringify({ query: '{ posts(limit: 5) { id title } }' })
}).then(r => r.json())
`}
              </pre>
            </motion.div>
          </div>

          <div className="relative h-[480px] rounded-xl overflow-hidden border border-white/10 bg-black/40">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
