import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuIcon, CloseIcon } from './Icons'
import Modal from './Modal'
import { scrollToId } from '../utils'

// A small form that flips to a success state on submit (no backend needed).
function ActionForm({ fields, cta, success, onDone }) {
  const [sent, setSent] = useState(false)
  if (sent) {
    return (
      <div className="text-center">
        <p className="rounded-xl bg-haven-beige px-5 py-4 font-medium text-haven-terracottaDark">
          {success}
        </p>
        <button
          onClick={onDone}
          className="mt-5 w-full rounded-full bg-haven-charcoal py-3 font-semibold text-white"
        >
          Done
        </button>
      </div>
    )
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
      className="flex flex-col gap-3"
    >
      {fields.map((f) => (
        <label key={f.name} className="block text-left">
          <span className="text-sm font-medium text-haven-charcoal/80">{f.label}</span>
          <input
            type={f.type}
            required
            placeholder={f.placeholder}
            className="mt-1.5 w-full rounded-xl border border-haven-sand bg-haven-bg px-4 py-3 text-[15px] focus:border-haven-terracotta focus:outline-none focus:ring-2 focus:ring-haven-terracotta/25"
          />
        </label>
      ))}
      <button
        type="submit"
        className="mt-2 w-full rounded-full bg-haven-terracotta py-3.5 font-semibold text-white transition-colors hover:bg-haven-terracottaDark"
      >
        {cta}
      </button>
    </form>
  )
}

export default function Navbar({ onFilter }) {
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState(null) // 'signin' | 'list' | null

  const navLinks = [
    { label: 'Buy', action: () => { onFilter('For Sale'); scrollToId('listings') } },
    { label: 'Rent', action: () => { onFilter('To Rent'); scrollToId('listings') } },
    { label: 'Sell', action: () => setModal('list') },
    { label: 'Agents', action: () => scrollToId('agents') },
  ]

  const handleNav = (action) => {
    action()
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-haven-bg/85 backdrop-blur-md border-b border-haven-sand/60">
      <nav className="section-px flex items-center justify-between h-[72px]">
        {/* Logo */}
        <button
          onClick={() => scrollToId('top')}
          className="font-serif text-2xl font-bold text-haven-charcoal tracking-tight"
        >
          haven<span className="text-haven-terracotta">.</span>
        </button>

        {/* Center nav (desktop) */}
        <ul className="hidden md:flex items-center gap-9 text-[15px] font-medium text-haven-charcoal/80">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.action)}
                className="relative py-1 transition-colors hover:text-haven-terracotta after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-haven-terracotta after:transition-all hover:after:w-full"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right actions (desktop) */}
        <div className="hidden md:flex items-center gap-5">
          <button
            onClick={() => setModal('signin')}
            className="text-[15px] font-medium text-haven-charcoal/80 transition-colors hover:text-haven-terracotta"
          >
            Sign In
          </button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setModal('list')}
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
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.action)}
                    className="block w-full text-left py-2.5 text-base font-medium text-haven-charcoal/85"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-3 flex flex-col gap-3">
                <button
                  onClick={() => handleNav(() => setModal('signin'))}
                  className="text-left py-2 text-base font-medium text-haven-charcoal/85"
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleNav(() => setModal('list'))}
                  className="rounded-full bg-haven-terracotta px-5 py-3 text-base font-semibold text-white"
                >
                  List Property
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sign In modal */}
      <Modal
        open={modal === 'signin'}
        onClose={() => setModal(null)}
        title="Welcome back"
        subtitle="Sign in to save homes and manage your searches."
      >
        <ActionForm
          fields={[
            { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
            { name: 'password', label: 'Password', type: 'password', placeholder: '••••••••' },
          ]}
          cta="Sign In"
          success="✅ Signed in — welcome back to Haven!"
          onDone={() => setModal(null)}
        />
      </Modal>

      {/* List Property modal */}
      <Modal
        open={modal === 'list'}
        onClose={() => setModal(null)}
        title="List your property"
        subtitle="Tell us about your home and an agent will be in touch."
      >
        <ActionForm
          fields={[
            { name: 'name', label: 'Your name', type: 'text', placeholder: 'Jane Doe' },
            { name: 'address', label: 'Property address', type: 'text', placeholder: '12 Maple Grove, London' },
            { name: 'email', label: 'Contact email', type: 'email', placeholder: 'you@example.com' },
          ]}
          cta="Request a valuation"
          success="🎉 Thanks! One of our agents will reach out shortly."
          onDone={() => setModal(null)}
        />
      </Modal>
    </header>
  )
}
