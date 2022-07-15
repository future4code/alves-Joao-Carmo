import React, { useEffect } from 'react'
import useTripDetails from '../hooks/useTripsDetails'

export default function TripDetailsPage() {
  const id = window.location.href.split('/').pop()
  const tripDetails = useTripDetails(id)
  useEffect(() => {
    console.log(id)
    console.log(localStorage.getItem('token'))
    console.log(tripDetails)
  }, [])
  return (
    <div>TripDetailsPage
    </div>
  )
}
