import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedListings from './components/FeaturedListings'
import BrowseByArea from './components/BrowseByArea'
import WhyHaven from './components/WhyHaven'
import AgentSpotlight from './components/AgentSpotlight'
import StatsBanner from './components/StatsBanner'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  // Saved (favourited) property ids, toggled from the card heart buttons.
  const [savedIds, setSavedIds] = useState([])
  // Active quick-filter pill ('For Sale' | 'To Rent' | 'New Builds' | 'Luxury' | null).
  const [filter, setFilter] = useState(null)

  function toggleSave(id) {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )
  }

  // Selecting the active pill again clears the filter (toggle behaviour).
  function selectFilter(pill) {
    setFilter((prev) => (prev === pill ? null : pill))
  }

  return (
    <div className="min-h-screen bg-haven-bg">
      <Navbar onFilter={setFilter} />
      <main>
        <Hero filter={filter} onSelectFilter={selectFilter} />
        <FeaturedListings
          savedIds={savedIds}
          onToggleSave={toggleSave}
          filter={filter}
          onClearFilter={() => setFilter(null)}
        />
        <BrowseByArea />
        <WhyHaven />
        <AgentSpotlight />
        <StatsBanner />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
