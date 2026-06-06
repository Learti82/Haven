import { motion } from 'framer-motion'
import { SearchIcon, ChevronDown } from './Icons'
import { scrollToId } from '../utils'

const fields = [
  { label: 'Location', options: ['Any location', 'London', 'Bath', 'Cornwall', 'Cotswolds'] },
  { label: 'Type', options: ['Any type', 'House', 'Apartment', 'Villa', 'Townhouse'] },
  { label: 'Price Range', options: ['Any price', 'Up to £500k', '£500k – £1m', '£1m – £2m', '£2m+'] },
  { label: 'Bedrooms', options: ['Any', '1+', '2+', '3+', '4+', '5+'] },
]

const pills = ['For Sale', 'To Rent', 'New Builds', 'Luxury']

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero({ filter, onSelectFilter }) {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-gradient">
      {/* Real hero photograph (distinct from any listing image) */}
      <img
        src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=2000&q=80"
        alt="A striking contemporary luxury home"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Warm gradient overlay keeps the brand palette while letting the photo show through */}
      <div className="absolute inset-0 bg-gradient-to-br from-haven-cream/55 via-haven-beige/30 to-haven-terracotta/55" />
      {/* Subtle scrim behind the headline area for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-haven-charcoal/25 via-white/10 to-white/20" />

      {/* Soft decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-haven-terracotta/30 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-px relative z-10 flex flex-col items-center text-center pt-20 pb-24 sm:pt-28 sm:pb-32"
      >
        <motion.span
          variants={item}
          className="mb-5 rounded-full bg-white/35 px-4 py-1.5 text-sm font-medium text-haven-charcoal/80 backdrop-blur-sm"
        >
          14,200+ premium homes, verified daily
        </motion.span>

        <motion.h1
          variants={item}
          className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-haven-charcoal"
        >
          Find Your Perfect Home
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-base sm:text-lg text-haven-charcoal/70"
        >
          Discover handpicked properties across the country, guided by agents who
          know every street by name.
        </motion.p>

        {/* Search bar */}
        <motion.div
          variants={item}
          className="mt-10 w-full max-w-4xl rounded-2xl sm:rounded-full bg-white/95 p-3 shadow-warm-lg backdrop-blur"
        >
          <div className="flex flex-col sm:flex-row sm:items-stretch gap-2 sm:gap-0">
            {fields.map((field, i) => (
              <div
                key={field.label}
                className={`relative flex-1 px-4 py-2 text-left sm:px-5 ${
                  i !== 0 ? 'sm:border-l sm:border-haven-sand/70' : ''
                }`}
              >
                <span className="block text-xs font-semibold uppercase tracking-wide text-haven-taupe">
                  {field.label}
                </span>
                <select
                  className="mt-0.5 w-full cursor-pointer appearance-none bg-transparent pr-6 text-[15px] font-medium text-haven-charcoal focus:outline-none"
                  defaultValue={field.options[0]}
                >
                  {field.options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 bottom-3 h-4 w-4 text-haven-taupe" />
              </div>
            ))}

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToId('listings')}
              className="flex items-center justify-center gap-2 rounded-xl sm:rounded-full bg-haven-terracotta px-7 py-3.5 font-semibold text-white shadow-warm-sm transition-colors hover:bg-haven-terracottaDark"
            >
              <SearchIcon className="h-5 w-5" />
              Search
            </motion.button>
          </div>
        </motion.div>

        {/* Quick filter pills — drive the featured listings grid */}
        <motion.div variants={item} className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {pills.map((pill) => (
            <button
              key={pill}
              onClick={() => {
                onSelectFilter(pill)
                scrollToId('listings')
              }}
              className={`rounded-full px-5 py-2 text-sm font-medium backdrop-blur-sm transition-all ${
                filter === pill
                  ? 'bg-haven-charcoal text-white shadow-warm-sm'
                  : 'bg-white/45 text-haven-charcoal/85 hover:bg-white/70'
              }`}
            >
              {pill}
            </button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
