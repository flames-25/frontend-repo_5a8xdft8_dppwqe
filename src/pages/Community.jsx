import { motion } from 'framer-motion'
import { Github, MessageSquare, History, ArrowUpRight } from 'lucide-react'

export default function Community() {
  const tiles = [
    {
      title: 'GitHub',
      desc: 'Code, Issues & Pull Requests.',
      href: 'https://github.com',
      icon: Github,
    },
    {
      title: 'Discussions',
      desc: 'Fragen, Best Practices, Ideen.',
      href: '#',
      icon: MessageSquare,
    },
    {
      title: 'Changelog',
      desc: 'Alle Releases & Notes.',
      href: '#',
      icon: History,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0b0f17] text-gray-200 relative">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl font-bold text-white tracking-tight">Community & Support</h1>
          <p className="mt-2 text-gray-300 max-w-2xl">Tritt der Community bei, tausche dich aus und verfolge den Fortschritt.</p>
        </motion.div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tiles.map(({ title, desc, href, icon: Icon }, i) => (
            <motion.a
              key={title}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-md bg-gradient-to-br from-cyan-400/30 to-blue-600/30 border border-white/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                </div>
                <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <p className="mt-2 text-gray-300">{desc}</p>
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-semibold text-white">Support</h2>
          <p className="mt-2 text-gray-300">Erhalte Hilfe über GitHub Issues oder starte eine Discussion. Für geschäftliche Anfragen: hello@coredeck.dev</p>
        </motion.div>
      </div>
    </div>
  )
}
