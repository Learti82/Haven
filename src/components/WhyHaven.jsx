import { motion } from 'framer-motion'
import { ShieldIcon, UsersIcon, ChartIcon } from './Icons'

const values = [
  {
    icon: ShieldIcon,
    title: 'Verified Listings',
    text: 'Every property is vetted and confirmed by our team, so what you see is exactly what you get — no surprises.',
  },
  {
    icon: UsersIcon,
    title: 'Expert Agents',
    text: 'Work with local specialists who know their neighbourhoods inside out and negotiate fiercely on your behalf.',
  },
  {
    icon: ChartIcon,
    title: 'Market Insights',
    text: 'Make confident decisions with real-time pricing data, trend reports, and tailored valuation estimates.',
  },
]

export default function WhyHaven() {
  return (
    <section className="section-px py-20 sm:py-24">
      <div className="mb-14 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-haven-terracotta">
          The Haven difference
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-haven-charcoal">
          Why Haven
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
        {values.map((v, i) => {
          const Icon = v.icon
          return (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="rounded-2xl border border-haven-sand/60 bg-white p-8 shadow-warm-sm transition-shadow hover:shadow-warm"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-haven-beige text-haven-terracotta">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-haven-charcoal">{v.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-haven-charcoal/70">{v.text}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
