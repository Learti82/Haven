import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from './Icons'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email.trim()) setSent(true)
  }

  return (
    <section className="section-px py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-haven-charcoal">
          Never miss the right home
        </h2>
        <p className="mt-4 text-base sm:text-lg text-haven-charcoal/70">
          Get fresh listings and market insights delivered to your inbox, tuned to
          exactly what you're searching for.
        </p>

        {sent ? (
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto mt-8 max-w-md rounded-full bg-haven-beige px-6 py-4 font-medium text-haven-terracottaDark"
          >
            🎉 You're in! Look out for your first edit soon.
          </motion.p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-full border border-haven-sand bg-white px-5 py-3.5 text-[15px] text-haven-charcoal shadow-warm-sm focus:border-haven-terracotta focus:outline-none focus:ring-2 focus:ring-haven-terracotta/30"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 rounded-full bg-haven-terracotta px-7 py-3.5 font-semibold text-white shadow-warm-sm transition-colors hover:bg-haven-terracottaDark"
            >
              Subscribe <ArrowRight className="h-4 w-4" />
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
