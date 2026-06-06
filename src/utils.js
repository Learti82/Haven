// Formats a price. Rentals (To Rent / lower values) show a monthly suffix.
export function formatPrice(value, status) {
  const isRental = status === 'To Rent' || (status === 'New Build' && value < 100000)
  if (isRental) {
    return `£${value.toLocaleString('en-GB')} pcm`
  }
  return `£${value.toLocaleString('en-GB')}`
}
