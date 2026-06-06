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

  function toggleSave(id) {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )
  }

  return (
    <div className="min-h-screen bg-haven-bg">
      <Navbar />
      <main>
        <Hero />
        <FeaturedListings savedIds={savedIds} onToggleSave={toggleSave} />
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
