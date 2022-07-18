import React from 'react'
import { useTrips } from '../hooks/useTrips.js'
import TripCard from '../components/TripCard.js'
import Logo from '../img/logo.png'
import { Image, Flex, Heading, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'


export default function ListTripsPage() {
  let navigate = useNavigate()
  const [trips, setTrips, setShouldUpdate, isLoading, error] = useTrips()

  return (
    <Flex flexDirection='column' alignItems='center' justifyContent='flex-start' minH={'101vh'}>
      <Image src={Logo} padding={10} onClick={() => navigate('/')} _hover={{ cursor: 'pointer' }} />
      <Heading padding={6} fontsize={{ sm: '6xl', md: '2xl' }}>Viagens Disponíveis</Heading>
      <Flex flexDirection='column' alignItems='center' justifyContent='center'>
        {isLoading ? <Spinner p={10} margin={40}/> : 
        trips.map((item) => {
          return <TripCard
            name={item.name}
            description={item.description}
            duration={item.durationInDays}
            date={item.date}
            planet={item.planet}
            id={item.id}
          />
        })}
      </Flex>
    </Flex>
  )
}
