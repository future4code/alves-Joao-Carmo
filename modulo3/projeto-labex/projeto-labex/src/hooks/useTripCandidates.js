import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function useTripCandidates(id) {
    const [tripCandidates, setTripCandidates] = useState([])
    const [shouldUpdate, setShouldUpdate] = useState(true)

    useEffect(() => {
        if (shouldUpdate == true) {
            axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-colodetti-alves/trip/${id}`, {
                headers: {
                    auth: `${localStorage.getItem('token')}`
                }
            })
                .then((res) => {
                    setShouldUpdate(false)
                    setTripCandidates(res.data.trip.candidates)
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }, [shouldUpdate])

    return [tripCandidates, setTripCandidates, setShouldUpdate]
}
