import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Select,
  Image
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../img/logo.png'

export default function CreateTripPage() {
  const navigate = useNavigate()
  const planets = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno']
  const [chosenPlanet, setChosenPlanet] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const [durationInput, setDurationInput] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token')) {
    } else {
      navigate('/login')
    }
  }, [])

  const createTrip = (name, planet, date, description, duration) => {
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: duration
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-colodetti-alves/trips`, body, {
      headers: {
        auth: `${localStorage.getItem('token')}`
      }
    })
      .then(() => {
        alert('Viagem criada com sucesso !')
        setNameInput('')
        setDateInput('')
        setDescriptionInput('')
        setDurationInput('')
        setChosenPlanet('')
      })
  }

  return (
    <Flex
      flexDirection={'column'}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
    >
      <Image src={Logo} />
      <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>Criar Viagens</Heading>
      <Stack
        spacing={5}
        w={'full'}
        maxW={'lg'}
        rounded={'xl'}
        boxShadow={'md'}
        backgroundColor={'purple.100'}
        p={8}
        my={12}>
        <FormControl id="name" isRequired>
          <FormLabel>Nome</FormLabel>
          <Input
            value={nameInput}
            placeholder="Nome"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            focusBorderColor='black'
            backgroundColor={'white'}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </FormControl>
        <FormControl id="planet" isRequired>
          <FormLabel>Planeta</FormLabel>
          <Select value={chosenPlanet} placeholder="Escolha um planeta" _placeholder={{ color: 'gray.500' }} onChange={(e) => setChosenPlanet(e.target.value)} focusBorderColor='black' backgroundColor={'white'}>
            {planets.map((option, index) => (
              <option key={index} value={option.value}>
                {option}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="date" isRequired>
          <FormLabel>Data</FormLabel>
          <Input
            value={dateInput}
            _placeholder={{ color: 'gray.500' }}
            type="date"
            focusBorderColor='black'
            backgroundColor={'white'}
            onChange={(e) => setDateInput(e.target.value)}
          />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel>Descrição</FormLabel>
          <Input
            value={descriptionInput}
            placeholder="Descrição"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            focusBorderColor='black'
            backgroundColor={'white'}
            onChange={(e) => setDescriptionInput(e.target.value)}
          />
        </FormControl>
        <FormControl id="duration" isRequired>
          <FormLabel>Duração em dias</FormLabel>
          <Input
            value={durationInput}
            placeholder={0}
            _placeholder={{ color: 'gray.500' }}
            type="number"
            focusBorderColor='black'
            backgroundColor={'white'}
            onChange={(e) => setDurationInput(e.target.value)}
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}
            onClick={() => navigate('/admin/trips/list')}>
            Cancelar
          </Button>
          <Button
            bg={'purple.600'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'purple.700',
            }}
            onClick={() => createTrip(nameInput, chosenPlanet, dateInput, descriptionInput, durationInput)}>
            Criar
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
