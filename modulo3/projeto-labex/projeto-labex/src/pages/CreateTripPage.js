import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Select,
  Image,
  FormErrorMessage,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../img/logo.png'
import { useTrips } from '../hooks/useTrips';

export default function CreateTripPage() {
  const navigate = useNavigate()
  const trips = useTrips()
  const planets = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno']
  const [form, setForm] = useState({ name: '', planet: '', date: '', description: '', durationInDays: '' })
  const [errors, setErrors] = useState({ name: false, planet: false, date: false, description: false, durationInDays: false})
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token')) {
    } else {
      navigate('/login')
    }
  }, [])

  const createTrip = (form) => {
    const tripsNames = trips[0].filter((item) => {return item.name === form.name})
    const filterNames = tripsNames.map((item) => {return item.name})
    console.log(tripsNames)
    console.log(filterNames)
    if (form.name === '' || filterNames.includes(form.name)) {
      setErrors({ name: true })
      return
    }
    if (form.planet === '') {
      setErrors({ planet: true })
      return
    }
    if (form.date === '' || Number(form.date.split('-')[0] < 2022) || (Number(form.date.split('-')[0] == 2022 && Number(form.date.split('-')[1]) < 7)) || (Number(form.date.split('-')[0] = 2022 && Number(form.date.split('-')[1]) == 7)) && Number(form.date.split('-')[2]) < 18){
      setErrors({ date: true })
      return
    }
    if (form.description === '') {
      setErrors({ description: true })
      return
    }
    if (form.durationInDays === '') {
      setErrors({ durationInDays: true })
      return
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-colodetti-alves/trips`, form, {
      headers: {
        auth: `${localStorage.getItem('token')}`
      }
    })
      .then(() => {
        setSuccess(true)
        setErrors({ name: false, planet: false, date: false, description: false, durationInDays: false})
        setForm({ name: '', planet: '', date: '', description: '', durationInDays: '' })
      })
  }

  return (
    <Flex
      flexDirection={'column'}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
    >
      <Image src={Logo} onClick={() => navigate('/')} _hover={{cursor: 'pointer'}}/>
      <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} my={10}>Criar Viagens</Heading>
      <Stack
        spacing={5}
        w={'full'}
        maxW={'lg'}
        rounded={'xl'}
        boxShadow={'md'}
        backgroundColor={'purple.100'}
        p={8}
        my={5}>
        {success && <Alert status='success' rounded={'xl'}>
          <AlertIcon />
          Viagem criada com sucesso !
          <CloseButton onClick={() => setSuccess(false)}></CloseButton>
        </Alert>}
        <FormControl id="name" isRequired isInvalid={errors.name}>
          <FormLabel htmlFor='name'>Nome</FormLabel>
          <Input
            id='name'
            value={form.name}
            placeholder="Nome"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            focusBorderColor='black'
            backgroundColor={'white'}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <FormErrorMessage>Nome inválido ou já utilizado</FormErrorMessage>
        </FormControl>
        <FormControl id="planet" isRequired isInvalid={errors.planet}>
          <FormLabel htmlFor='select'>Planeta</FormLabel>
          <Select value={form.planet} placeholder="Escolha um planeta" _placeholder={{ color: 'gray.500' }} onChange={(e) => setForm({ ...form, planet: e.target.value })} focusBorderColor='black' backgroundColor={'white'}>
            {planets.map((option, index) => (
              <option key={index} value={option.value}>
                {option}
              </option>
            ))}
          </Select>
          <FormErrorMessage>Preencha esse Campo</FormErrorMessage>
        </FormControl>
        <FormControl id="date" isRequired isInvalid={errors.date}>
          <FormLabel>Data</FormLabel>
          <Input
            value={form.date}
            _placeholder={{ color: 'gray.500' }}
            type="date"
            focusBorderColor='black'
            backgroundColor={'white'}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          <FormErrorMessage>Data inválida</FormErrorMessage>
        </FormControl>
        <FormControl id="description" isRequired isInvalid={errors.description}>
          <FormLabel>Descrição</FormLabel>
          <Input
            value={form.description}
            placeholder="Descrição"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            focusBorderColor='black'
            backgroundColor={'white'}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <FormErrorMessage>Preencha esse Campo</FormErrorMessage>
        </FormControl>
        <FormControl id="duration" isRequired isInvalid={errors.durationInDays}>
          <FormLabel>Duração em dias</FormLabel>
          <Input
            value={form.durationInDays}
            placeholder={0}
            _placeholder={{ color: 'gray.500' }}
            type="number"
            focusBorderColor='black'
            backgroundColor={'white'}
            onChange={(e) => setForm({ ...form, durationInDays: e.target.value })}
          />
          <FormErrorMessage>Preencha esse Campo</FormErrorMessage>
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
            onClick={() => createTrip(form)}>
            Criar
          </Button>
        </Stack>
      </Stack>
    </Flex >
  );
}
