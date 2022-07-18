import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function useTripCandidates(id) {
    const [tripCandidates, setTripCandidates] = useState([])
    const [shouldUpdate, setShouldUpdate] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setIsLoading(true)
        // if (shouldUpdate == true) {
            axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-colodetti-alves/trip/${id}`, {
                headers: {
                    auth: `${localStorage.getItem('token')}`
                }
            })
                .then((res) => {
                    setIsLoading(false)
                    setShouldUpdate(false)
                    setTripCandidates(res.data.trip.candidates)
                })
                .catch((err) => {
                    setError(err)
                    setIsLoading(false)
                    console.error(err)
                })
        // }
    }, [shouldUpdate])

    return [tripCandidates, setTripCandidates, setShouldUpdate, isLoading, error]
}
