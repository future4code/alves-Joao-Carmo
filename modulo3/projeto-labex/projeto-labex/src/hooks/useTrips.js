import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function useTrips() {
    const [trips, setTrips] = useState([])
    const [shouldUpdate, setShouldUpdate] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setIsLoading(true)
        if (shouldUpdate == true) {
            axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-colodetti-alves/trips')
                .then((res) => {
                    setIsLoading(false)
                    setShouldUpdate(false)
                    setTrips(res.data.trips)
                })
                .catch((err) => {
                    setIsLoading(false)
                    setError(err)
                    console.error(err)
                })
        }
    }, [shouldUpdate])

    return [trips, setTrips, setShouldUpdate, isLoading, error]

}
