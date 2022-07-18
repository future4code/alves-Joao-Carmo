import React, { useState, useEffect } from 'react'
import { Flex, Button, Image, Heading, Spinner, Alert, AlertIcon, CloseButton } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useTrips } from '../hooks/useTrips'
import AdminTripCard from '../components/AdminTripCard'
import Logo from '../img/logo.png'

export default function AdminHomePage() {
  const [trips, setTrips, setShouldUpdate, isLoading, error, setIsLoading, shouldUpdate] = useTrips()
  let navigate = useNavigate()
  const [success, setSuccess] = useState(false)

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

  const deleteTrip = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-colodetti-alves/trips/${id}`, {
      headers: {
        auth: `${localStorage.getItem('token')}`
      }
    })
      .then(() => {
        setShouldUpdate(true)
        setSuccess(true)
      })
  }

  return (
    <Flex flexDirection={'column'} minH={'101vh'}>
      <Image src={Logo} alignSelf={'center'} justifySelf={'center'} onClick={() => navigate('/')} _hover={{ cursor: 'pointer' }} />
      <Flex justify={'center'} align={'center'}>
        <Heading p={2} fontSize={['2xl', '2xl', '4xl']}>Bem vindo,</Heading>
        <Heading p={2} color={'purple.500'} fontSize={['2xl', '2xl', '4xl']}>{localStorage.getItem('user').toUpperCase()}</Heading>
      </Flex>

      <Flex p={8} align={'center'} justify={'center'} gap={2}>
        <Button
          w={150}
          rounded={'full'}
          bg={'red.500'}
          color={'white'}
          _hover={{
            bg: 'red.600',
          }}
          onClick={deleteToken}>Sair</Button>
        <Button
          w={150}
          rounded={'full'}
          bg={'purple.500'}
          color={'white'}
          _hover={{
            bg: 'purple.600',
          }}
          onClick={() => navigate('/admin/trips/create')}>Criar Viagens</Button>
      </Flex>
      {success && <Alert status='success' rounded={'xl'} w={'auto'} alignSelf='center'>
          <AlertIcon />
          Viagem deletada com sucesso !
          <CloseButton onClick={() => setSuccess(false)}></CloseButton>
        </Alert>}
      {isLoading ? <Spinner p={10} margin={40} alignSelf={'center'} justifySelf={'center'}/> :
        trips.map((item) => {
          return <AdminTripCard
            name={item.name}
            description={item.description}
            duration={item.durationInDays}
            date={item.date}
            planet={item.planet}
            id={item.id}
            deleteTrip={deleteTrip}
          />
        })}
    </Flex>

  )
}
