import React, { useState, useEffect } from 'react'
import { Flex, Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useTrips } from '../hooks/useTrips'
import AdminTripCard from '../components/AdminTripCard'

export default function AdminHomePage() {
  const trips = useTrips()
  let navigate = useNavigate()
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
    } else {
      navigate('/login')
    }
  }, [])

  const deleteToken = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <Flex flexDirection={'column'}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
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
      {trips.map((item) => {
        return <AdminTripCard
        name={item.name}
        description={item.description}
        duration={item.durationInDays}
        date={item.date}
        planet={item.planet}
        id={item.id}
      />
      })}
    </Flex>

  )
}
