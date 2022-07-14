import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Select,
  background,
  Image
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../img/logo.png'

export default function CreateTripPage() {
  const navigate = useNavigate()
  const planets = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno']
  const [chosenPlanet, setChosenPlanet] = useState('')
  const handleSelectChange = e => {
    console.log(e.target.value);
    setChosenPlanet(e.target.value)
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
    } else {
      navigate('/login')
    }
  }, [])

  return (
    <Flex
      flexDirection={'column'}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
      <Image src={Logo}/>
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
            placeholder="Nome"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            focusBorderColor='black'
            backgroundColor={'white'}
          />
        </FormControl>
        <FormControl id="planet" isRequired>
          <FormLabel>Planeta</FormLabel>
          <Select placeholder="Escolha um planeta" _placeholder={{ color: 'gray.500' }} onChange={handleSelectChange} focusBorderColor='black' backgroundColor={'white'}>
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
            _placeholder={{ color: 'gray.500' }}
            type="date"
            focusBorderColor='black'
            backgroundColor={'white'}
          />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel>Descrição</FormLabel>
          <Input
            placeholder="Descrição"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            focusBorderColor='black'
            backgroundColor={'white'}
          />
        </FormControl>
        <FormControl id="duration" isRequired>
          <FormLabel>Duração em dias</FormLabel>
          <Input
            placeholder={0}
            _placeholder={{ color: 'gray.500' }}
            type="number"
            focusBorderColor='black'
            backgroundColor={'white'}
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}>
            Cancelar
          </Button>
          <Button
            bg={'purple.600'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'purple.700',
            }}>
            Criar
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
