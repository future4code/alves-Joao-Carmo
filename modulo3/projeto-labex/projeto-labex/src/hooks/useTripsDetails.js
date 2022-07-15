import React, { useState, useEffect} from 'react'
import axios from 'axios'

export default function useTripDetails(id) {
    const [tripDetails, setTripDetails] = useState({})

    useEffect(() => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-colodetti-alves/trip/${id}`, {
            headers : {
                auth: `${localStorage.getItem('token')}`
            }
        })    
        .then((res) => {
            setTripDetails(res.data.trip)
            console.log(res.data.trip)
        })
        .catch((err) => {
            console.error(err)
        })
    }, [])

  return tripDetails
}
