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
import { useTrips } from '../hooks/useTrips';
import Logo from '../img/logo.png'
import TripDetails from '../components/TripDetails';
import axios from 'axios';

export default function ApplicationFormPage() {
  const trips = useTrips()
  const navigate = useNavigate()
  const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"]
  const [chosenTrip, setChosenTrip] = useState('')
  const [chosenTripId, setChosenTripId] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [ageInput, setAgeInput] = useState('')
  const [messageInput, setMessageInput] = useState('')
  const [professionInput, setProfessionInput] = useState('')
  const [chosenCountry, setChosenCountry] = useState('')

  useEffect(() => {
    if (chosenTrip !== '') {
      setChosenTripId(showingTrip[0].id)
      console.log(showingTrip[0].id)
    }
  }, [chosenTrip])

  const showingTrip = trips.filter((item) => {
    return item.name === chosenTrip
  })

  const applyToTrip = (name, age, message, profession, country, id) => {
    const body = {
      name: name,
      age: age,
      applicationText: message,
      profession: profession,
      country: country
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-colodetti-alves/trips/${id}/apply`, body,)
      .then(() => {
        alert('Inscrição realizada com sucesso !')
        setNameInput('')
        setAgeInput('')
        setMessageInput('')
        setProfessionInput('')
        setChosenCountry('')
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
      {showingTrip.map((item) => {
        return <TripDetails
          name={item.name}
          description={item.description}
          duration={item.durationInDays}
          date={item.date}
          planet={item.planet}
          id={item.id}
        />
      })}
      <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>Inscrição</Heading>
      <Stack
        spacing={5}
        w={'full'}
        maxW={'lg'}
        rounded={'xl'}
        boxShadow={'md'}
        backgroundColor={'purple.100'}
        p={8}
        my={12}>
        <FormControl id="planet" isRequired>
          <FormLabel>Viagem</FormLabel>
          <Select placeholder='Escolha uma viagem' _placeholder={{ color: 'gray.500' }} onChange={(e) => { setChosenTrip(e.target.value) }} focusBorderColor='black' backgroundColor={'white'}>
            {trips.map((option, index) => (
              <option key={index} value={option.value}>
                {option.name}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="name" isRequired>
          <FormLabel>Nome</FormLabel>
          <Input
            value={nameInput}
            placeholder="Nome"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            focusBorderColor='black'
            backgroundColor={'white'}
            onChange={(e) => { setNameInput(e.target.value) }}
          />
        </FormControl>
        <FormControl id="age" isRequired>
          <FormLabel>Idade</FormLabel>
          <Input
            value={ageInput}
            placeholder='Idade'
            _placeholder={{ color: 'gray.500' }}
            type="numeber"
            focusBorderColor='black'
            backgroundColor={'white'}
            onChange={(e) => { setAgeInput(e.target.value) }}
          />
        </FormControl>
        <FormControl id="app-text" isRequired>
          <FormLabel>Texto de Aplicação</FormLabel>
          <Input
            value={messageInput}
            placeholder="Texto de Aplicação"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            focusBorderColor='black'
            backgroundColor={'white'}
            onChange={(e) => { setMessageInput(e.target.value) }}
          />
        </FormControl>
        <FormControl id="profession" isRequired>
          <FormLabel>Profissão</FormLabel>
          <Input
            value={professionInput}
            placeholder='Profissão'
            _placeholder={{ color: 'gray.500' }}
            type="text"
            focusBorderColor='black'
            backgroundColor={'white'}
            onChange={(e) => { setProfessionInput(e.target.value) }}
          />
        </FormControl>
        <FormControl id="country" isRequired>
          <FormLabel>País</FormLabel>
          <Select value={chosenCountry} placeholder='Escolha um país' _placeholder={{ color: 'gray.500' }} onChange={(e) => { setChosenCountry(e.target.value) }} focusBorderColor='black' backgroundColor={'white'}>
            {countries.map((option, index) => (
              <option key={index} value={option.value}>
                {option}
              </option>
            ))}
          </Select>
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}
            onClick={() => navigate('/trips/list')}>
            Cancelar
          </Button>
          <Button
            bg={'purple.600'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'purple.700',
            }}
            onClick={() => applyToTrip(nameInput, ageInput, messageInput, professionInput, chosenCountry, chosenTripId)}>
            Enviar
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
