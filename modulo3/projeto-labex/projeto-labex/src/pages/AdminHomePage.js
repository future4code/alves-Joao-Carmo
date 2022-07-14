import React, { useState, useEffect } from 'react'
import { Flex, Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AdminHomePage() {
  const [trips, setTripsList] = useState([])
  let navigate = useNavigate()
  const getTrips = () => {
    axios
      .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-colodetti-alves/trips')
      .then(res => {
        console.log(res)
        setTripsList(res.data.trips)
      })
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
    } else {
      navigate('/login')
    }
    getTrips()
  }, [])

  const tripsList = trips.map((item) => {
    return item.name
  })

  const deleteToken = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <Flex p={8} flex={1} align={'center'} justify={'center'}>
      <p>{tripsList}</p>
      <Button
        rounded={'full'}
        bg={'purple.500'}
        color={'white'}
        _hover={{
          bg: 'purple.600',
        }}
        onClick={() => navigate('/admin/trips/create')}>Criar Viagens</Button>

      <Button
        rounded={'full'}
        bg={'red.500'}
        color={'white'}
        _hover={{
          bg: 'red.600',
        }}
        onClick={deleteToken}>Sair</Button>
    </Flex>
  )
}
