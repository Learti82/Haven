import { motion } from 'framer-motion'
import PropertyCard from './PropertyCard'
import { properties } from '../data'

export default function FeaturedListings({ savedIds, onToggleSave }) {
  return (
    <section className="section-px py-20 sm:py-24">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-haven-terracotta">
            Handpicked
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-haven-charcoal">
            Featured Listings
          </h2>
        </div>
        <a
          href="#"
          className="text-sm font-semibold text-haven-terracotta transition-colors hover:text-haven-terracottaDark"
        >
          View all properties →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property, i) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
          >
            <PropertyCard
              property={property}
              saved={savedIds.includes(property.id)}
              onToggleSave={onToggleSave}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
