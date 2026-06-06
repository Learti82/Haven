import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuIcon, CloseIcon } from './Icons'

const navLinks = ['Buy', 'Rent', 'Sell', 'Agents']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-haven-bg/85 backdrop-blur-md border-b border-haven-sand/60">
      <nav className="section-px flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="font-serif text-2xl font-bold text-haven-charcoal tracking-tight">
          haven<span className="text-haven-terracotta">.</span>
        </a>

        {/* Center nav (desktop) */}
        <ul className="hidden md:flex items-center gap-9 text-[15px] font-medium text-haven-charcoal/80">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="relative py-1 transition-colors hover:text-haven-terracotta after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-haven-terracotta after:transition-all hover:after:w-full"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions (desktop) */}
        <div className="hidden md:flex items-center gap-5">
          <button className="text-[15px] font-medium text-haven-charcoal/80 transition-colors hover:text-haven-terracotta">
            Sign In
          </button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-haven-terracotta px-5 py-2.5 text-[15px] font-semibold text-white shadow-warm-sm transition-colors hover:bg-haven-terracottaDark"
          >
            List Property
          </motion.button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-haven-charcoal"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-haven-sand/60 bg-haven-bg"
          >
            <ul className="section-px py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="block py-2.5 text-base font-medium text-haven-charcoal/85"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li className="pt-3 flex flex-col gap-3">
                <button className="text-left py-2 text-base font-medium text-haven-charcoal/85">
                  Sign In
                </button>
                <button className="rounded-full bg-haven-terracotta px-5 py-3 text-base font-semibold text-white">
                  List Property
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
