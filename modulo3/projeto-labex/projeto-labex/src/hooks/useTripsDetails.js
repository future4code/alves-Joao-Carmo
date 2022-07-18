import React, { useState, useEffect} from 'react'
import axios from 'axios'

export default function useTripDetails(id) {
    const [tripDetails, setTripDetails] = useState({})
    const [isLoadingDetails, setIsLoadingDetails] = useState(false)
    const [errorDetails, setErrorDetails] = useState("")

    useEffect(() => {
        setIsLoadingDetails(true)
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-colodetti-alves/trip/${id}`, {
            headers : {
                auth: `${localStorage.getItem('token')}`
            }
        })    
        .then((res) => {
            setIsLoadingDetails(false)
            setTripDetails(res.data.trip)
        })
        .catch((err) => {
            setIsLoadingDetails(false)
            setErrorDetails(err)
        })
    }, [])

  return [tripDetails, isLoadingDetails, errorDetails]

}
