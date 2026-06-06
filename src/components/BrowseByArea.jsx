import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PinIcon, BedIcon } from './Icons'
import { areaListings } from '../data'
import { formatPrice } from '../utils'

export default function BrowseByArea() {
  const [view, setView] = useState('map') // 'map' | 'list'
  const [active, setActive] = useState(null)

  return (
    <section className="section-px py-20 sm:py-24">
      <div className="mb-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-haven-terracotta">
            Explore
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-haven-charcoal">
            Browse by Area
          </h2>
        </div>

        {/* Toggle */}
        <div className="inline-flex rounded-full bg-haven-beige p-1">
          {['map', 'list'].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className="relative rounded-full px-6 py-2 text-sm font-semibold capitalize transition-colors"
            >
              {view === v && (
                <motion.span
                  layoutId="viewToggle"
                  className="absolute inset-0 rounded-full bg-haven-terracotta shadow-warm-sm"
                  transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${view === v ? 'text-white' : 'text-haven-charcoal/70'}`}>
                {v} View
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="relative min-h-[460px]">
        <AnimatePresence mode="wait">
          {view === 'map' ? (
            <motion.div
              key="map"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative h-[460px] w-full overflow-hidden rounded-3xl bg-haven-sand"
            >
              {/* Faux map grid + roads */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    'linear-gradient(#cbb89f 1px, transparent 1px), linear-gradient(90deg, #cbb89f 1px, transparent 1px)',
                  backgroundSize: '46px 46px',
                }}
              />
              <div className="absolute left-0 top-1/3 h-3 w-full -rotate-3 bg-haven-cream/70" />
              <div className="absolute left-1/2 top-0 h-full w-3 rotate-6 bg-haven-cream/70" />
              <div className="absolute left-[12%] top-[58%] h-40 w-44 rounded-2xl bg-haven-beige/70" />
              <div className="absolute right-[14%] top-[18%] h-32 w-40 rounded-2xl bg-emerald-200/50" />

              {/* Pin markers */}
              {areaListings.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActive(m)}
                  style={{ left: `${m.x}%`, top: `${m.y}%` }}
                  className="group absolute -translate-x-1/2 -translate-y-full focus:outline-none"
                  aria-label={m.name}
                >
                  <motion.div
                    initial={{ scale: 0, y: -8 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    className="flex flex-col items-center"
                  >
                    <span className="mb-1 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-haven-charcoal shadow-warm-sm opacity-0 transition-opacity group-hover:opacity-100">
                      {formatPrice(m.price, m.status)}
                    </span>
                    <PinIcon
                      className={`h-9 w-9 drop-shadow transition-colors ${
                        active?.id === m.id ? 'text-haven-charcoal' : 'text-haven-terracotta'
                      } group-hover:scale-110`}
                    />
                  </motion.div>
                </button>
              ))}

              {/* Selected marker info card */}
              <AnimatePresence>
                {active && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    className="absolute bottom-4 left-4 right-4 sm:left-4 sm:right-auto sm:w-72 rounded-2xl bg-white p-4 shadow-warm-lg"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-haven-terracotta">
                      {active.area}
                    </p>
                    <p className="mt-0.5 font-serif text-lg font-bold text-haven-charcoal">
                      {active.name}
                    </p>
                    <div className="mt-1 flex items-center justify-between text-sm text-haven-charcoal/75">
                      <span className="font-semibold">{formatPrice(active.price, active.status)}</span>
                      <span className="flex items-center gap-1">
                        <BedIcon className="h-4 w-4 text-haven-terracotta" /> {active.beds} beds
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.ul
              key="list"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 gap-3 md:grid-cols-2"
            >
              {areaListings.map((m, i) => (
                <motion.li
                  key={m.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center justify-between rounded-xl bg-white p-4 shadow-warm-sm transition-shadow hover:shadow-warm"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-haven-beige text-haven-terracotta">
                      <PinIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-haven-charcoal">{m.name}</p>
                      <p className="text-sm text-haven-taupe">
                        {m.area} · {m.beds} beds · {m.status}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-haven-charcoal">
                    {formatPrice(m.price, m.status)}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
