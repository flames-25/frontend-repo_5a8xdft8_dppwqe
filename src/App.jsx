import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-white">
      <Navbar />
      <Hero />
      <section className="py-20 bg-[#0b0f17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              title: 'High Performance',
              desc: 'Gebaut auf modernem PHP 8.x für Geschwindigkeit.'
            },{
              title: 'Framework Native',
              desc: 'Nahtlose Integration in Laravel/Symfony.'
            },{
              title: 'Security First',
              desc: 'Token-basierte Authentifizierung und skalierbare Sicherheit.'
            }].map((c) => (
              <div key={c.title} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-gray-300">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
