import { motion } from 'framer-motion'
import { stats } from '../data'

export default function StatsBanner() {
  return (
    <section className="bg-haven-terracotta text-white">
      <div className="section-px py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative"
            >
              {i !== 0 && (
                <span className="absolute -left-5 top-1/2 hidden h-16 -translate-y-1/2 border-l border-white/25 sm:block" />
              )}
              <p className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">{s.value}</p>
              <p className="mt-2 text-sm sm:text-base font-medium text-white/80">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
