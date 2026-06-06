import { motion } from 'framer-motion'
import { StarIcon } from './Icons'
import { agents } from '../data'

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {[1, 2, 3, 4, 5].map((n) => (
        <StarIcon key={n} filled={n <= Math.round(rating)} className="h-4 w-4" />
      ))}
      <span className="ml-1.5 text-sm font-semibold text-haven-charcoal">{rating.toFixed(1)}</span>
    </div>
  )
}

export default function AgentSpotlight() {
  return (
    <section id="agents" className="py-20 sm:py-24 scroll-mt-20">
      <div className="section-px mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-haven-terracotta">
            Meet the team
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-haven-charcoal">
            Agent Spotlight
          </h2>
        </div>
        <p className="max-w-sm text-sm text-haven-taupe">
          Swipe through our top-rated agents, each a specialist in their corner of the market.
        </p>
      </div>

      {/* Horizontal scroll rail */}
      <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-16 xl:px-24">
        {agents.map((agent, i) => (
          <motion.article
            key={agent.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group w-[260px] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-warm-sm transition-shadow hover:shadow-warm-lg"
          >
            <div className="h-64 overflow-hidden bg-haven-beige">
              <img
                src={agent.photo}
                alt={agent.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="font-serif text-lg font-bold text-haven-charcoal">{agent.name}</h3>
              <p className="text-sm text-haven-terracotta">{agent.specialty}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-haven-taupe">{agent.listings} listings</span>
                <Stars rating={agent.rating} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
