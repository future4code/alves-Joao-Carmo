import React from 'react'
import { useTrips } from '../hooks/useTrips.js'
import TripCard from '../components/TripCard.js'
import Logo from '../img/logo.png'
import { Image, Flex, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'


export default function ListTripsPage() {
  let navigate = useNavigate()
  const trips = useTrips()

  return (
    <Flex flexDirection='column' alignItems='center' justifyContent='center' >
      <Image src={Logo} padding={10} onClick={() => navigate('/')} _hover={{ cursor: 'pointer' }}/>
      <Heading padding={6} fontsize={{ sm: '6xl', md: '2xl' }}>Viagens Disponíveis</Heading>
      {trips.map((item) => {
        return <TripCard
          name={item.name}
          description={item.description}
          duration={item.durationInDays}
          date={item.date}
          planet={item.planet}
        />
      })}
    </Flex>
  )
}
