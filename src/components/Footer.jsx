const columns = [
  {
    title: 'Explore',
    links: ['Buy', 'Rent', 'Sell', 'New Builds', 'Luxury Homes'],
  },
  {
    title: 'Company',
    links: ['About Haven', 'Our Agents', 'Careers', 'Press', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Market Insights', 'Mortgage Calculator', 'Buying Guide', 'Help Centre'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Sitemap'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-haven-dark text-haven-cream/80">
      <div className="section-px py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="font-serif text-2xl font-bold text-white">
              haven<span className="text-haven-terracottaLight">.</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-haven-cream/60">
              A premium property platform helping you find the place you'll love coming home to.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-haven-cream/60 transition-colors hover:text-haven-terracottaLight"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-haven-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Haven Property Group. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-haven-terracottaLight">Instagram</a>
            <a href="#" className="transition-colors hover:text-haven-terracottaLight">Twitter</a>
            <a href="#" className="transition-colors hover:text-haven-terracottaLight">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
