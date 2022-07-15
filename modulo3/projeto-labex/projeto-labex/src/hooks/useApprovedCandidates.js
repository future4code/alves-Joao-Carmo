import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function useApprovedCandidates(id) {
    const [approvedCandidates, setApprovedCandidates] = useState([])

    useEffect(() => {
            axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-colodetti-alves/trip/${id}`, {
                headers: {
                    auth: `${localStorage.getItem('token')}`
                }
            })
                .then((res) => {
                    setApprovedCandidates(res.data.trip.approved)
                })
                .catch((err) => {
                    console.error(err)
                })
    }, [approvedCandidates])

    return approvedCandidates
}
