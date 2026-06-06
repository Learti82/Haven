import { motion } from 'framer-motion'
import { BedIcon, BathIcon, RulerIcon, HeartIcon, HomeIcon } from './Icons'
import { formatPrice } from '../utils'

const statusColors = {
  'For Sale': 'bg-haven-terracotta text-white',
  'To Rent': 'bg-haven-charcoal text-white',
  'New Build': 'bg-emerald-600 text-white',
  Luxury: 'bg-amber-500 text-white',
}

export default function PropertyCard({ property, saved, onToggleSave }) {
  const { image, price, status, beds, baths, sqft, title, address, agent, type } = property

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-warm-sm transition-shadow duration-300 hover:shadow-warm-lg"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-haven-beige to-haven-sand">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Fallback house icon sits behind the image */}
        <HomeIcon className="absolute inset-0 m-auto h-16 w-16 text-haven-taupe/40 -z-0" />

        {/* Price badge */}
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3.5 py-1.5 text-sm font-bold text-haven-charcoal shadow-warm-sm backdrop-blur">
          {formatPrice(price, status)}
        </span>

        {/* Status pill */}
        <span
          className={`absolute left-3 top-12 rounded-full px-2.5 py-1 text-xs font-semibold ${
            statusColors[status] || 'bg-haven-charcoal text-white'
          }`}
        >
          {status}
        </span>

        {/* Save heart */}
        <button
          onClick={() => onToggleSave(property.id)}
          aria-label={saved ? 'Remove from saved' : 'Save property'}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-haven-terracotta shadow-warm-sm backdrop-blur transition-transform hover:scale-110 active:scale-95"
        >
          <HeartIcon filled={saved} className="h-5 w-5" />
        </button>
      </div>

      {/* Details */}
      <div className="p-5">
        <h3 className="font-serif text-lg font-bold leading-snug text-haven-charcoal">
          {title}
        </h3>
        <p className="mt-1 text-sm text-haven-taupe">{address}</p>

        <div className="mt-4 flex items-center gap-4 text-sm text-haven-charcoal/75">
          <span className="flex items-center gap-1.5">
            <BedIcon className="h-[18px] w-[18px] text-haven-terracotta" /> {beds}
          </span>
          <span className="flex items-center gap-1.5">
            <BathIcon className="h-[18px] w-[18px] text-haven-terracotta" /> {baths}
          </span>
          <span className="flex items-center gap-1.5">
            <RulerIcon className="h-[18px] w-[18px] text-haven-terracotta" />{' '}
            {sqft.toLocaleString()} sqft
          </span>
        </div>

        {/* Agent row */}
        <div className="mt-5 flex items-center gap-3 border-t border-haven-sand/70 pt-4">
          <img
            src={agent.avatar}
            alt={agent.name}
            loading="lazy"
            className="h-9 w-9 rounded-full object-cover ring-2 ring-haven-beige"
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-haven-charcoal">{agent.name}</p>
            <p className="text-xs text-haven-taupe">{type} specialist</p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
