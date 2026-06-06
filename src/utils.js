// Smoothly scrolls to a section by id (used by nav links, pills, CTAs).
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Maps a hero filter pill label to the matching property status value.
export const pillToStatus = {
  'For Sale': 'For Sale',
  'To Rent': 'To Rent',
  'New Builds': 'New Build',
  Luxury: 'Luxury',
}

// Formats a price. Rentals (To Rent / lower values) show a monthly suffix.
export function formatPrice(value, status) {
  const isRental = status === 'To Rent' || (status === 'New Build' && value < 100000)
  if (isRental) {
    return `£${value.toLocaleString('en-GB')} pcm`
  }
  return `£${value.toLocaleString('en-GB')}`
}
