import { motion, AnimatePresence } from 'framer-motion'
import PropertyCard from './PropertyCard'
import { properties } from '../data'
import { pillToStatus } from '../utils'

export default function FeaturedListings({ savedIds, onToggleSave, filter, onClearFilter }) {
  const status = filter ? pillToStatus[filter] : null
  const visible = status ? properties.filter((p) => p.status === status) : properties

  return (
    <section id="listings" className="section-px py-20 sm:py-24 scroll-mt-20">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-haven-terracotta">
            Handpicked
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-haven-charcoal">
            {filter ? `${filter} Homes` : 'Featured Listings'}
          </h2>
        </div>
        {filter ? (
          <button
            onClick={onClearFilter}
            className="text-sm font-semibold text-haven-terracotta transition-colors hover:text-haven-terracottaDark"
          >
            ✕ Clear filter · show all
          </button>
        ) : (
          <button
            onClick={onClearFilter}
            className="text-sm font-semibold text-haven-terracotta transition-colors hover:text-haven-terracottaDark"
          >
            View all properties →
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((property, i) => (
            <motion.div
              layout
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            >
              <PropertyCard
                property={property}
                saved={savedIds.includes(property.id)}
                onToggleSave={onToggleSave}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visible.length === 0 && (
        <p className="py-10 text-center text-haven-taupe">No homes match this filter yet.</p>
      )}
    </section>
  )
}
