import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CloseIcon } from './Icons'

// Lightweight accessible modal: backdrop click + Escape close, scroll lock.
export default function Modal({ open, onClose, title, subtitle, children }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center overflow-y-auto p-4 py-8"
        >
          <div
            className="absolute inset-0 bg-haven-charcoal/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            className="relative my-auto max-h-[calc(100vh-4rem)] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-7 shadow-warm-lg"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-haven-taupe transition-colors hover:bg-haven-beige hover:text-haven-charcoal"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
            <h3 className="font-serif text-2xl font-bold text-haven-charcoal">{title}</h3>
            {subtitle && <p className="mt-1.5 text-sm text-haven-taupe">{subtitle}</p>}
            <div className="mt-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
