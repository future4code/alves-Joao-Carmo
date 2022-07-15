import React, { useState, useEffect} from 'react'
import axios from 'axios'

export function useTrips() {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-colodetti-alves/trips')
        .then((res) => {
            setTrips(res.data.trips)
            console.log(res.data.trips)
        })
    }, [])

  return trips

}
