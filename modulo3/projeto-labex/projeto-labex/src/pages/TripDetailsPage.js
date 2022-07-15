import React, { useEffect, useState } from 'react'
import useTripDetails from '../hooks/useTripsDetails'
import useTripCandidates from '../hooks/useTripCandidates'
import { Flex, Button, ButtonGroup, Image, Heading } from '@chakra-ui/react'
import TripDetails from '../components/TripDetails'
import Logo from '../img/logo.png'
import { useNavigate } from 'react-router-dom'
import CandidatesCard from '../components/CandidatesCard'
import useApprovedCandidates from '../hooks/useApprovedCandidates'
import ApprovedCandidatesCard from '../components/ApprovedCandidatesCard'
import axios from 'axios'

export default function TripDetailsPage() {
  let navigate = useNavigate()
  const id = window.location.href.split('/').pop()
  const tripDetails = useTripDetails(id)
  const [tripCandidates, setTripCandidates, setShouldUpdate] = useTripCandidates(id)
  const approvedCandidates = useApprovedCandidates(id)

  const onClickHandle = (decision, id, candidateId) => {
    const body = {
      approve: decision
    }
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-colodetti-alves/trips/${id}/candidates/${candidateId}/decide`, body, {
      headers: {
        auth: `${localStorage.getItem('token')}`
      }
    }).then(() => {
      setShouldUpdate(true)
    })
  }

  return (
    <Flex flexDir={'column'} align={'center'} justify={'center'}>
      <Image src={Logo} onClick={() => navigate('/')} _hover={{ cursor: 'pointer' }} />
      <TripDetails
        name={tripDetails.name}
        description={tripDetails.description}
        duration={tripDetails.durationInDays}
        date={tripDetails.date}
        planet={tripDetails.planet}
      />
      <Button
        size={'lg'}
        fontSize={'lg'}
        rounded={'full'}
        bg={'purple.400'}
        color={'white'}
        _hover={{
          bg: 'purple.500',
        }}
        _focus={{
          bg: 'purple.500',
        }}
        onClick={() => navigate('/admin/trips/list')}>
        Voltar
      </Button>
      <Flex p={50}>
        <Flex flex={1} flexDir={'column'} align={'center'} px={50} w={600}>
          <Heading>Candidatos Pendentes</Heading>
          {tripCandidates.map((item) => {
            return <CandidatesCard
              name={item.name}
              profession={item.profession}
              country={item.country}
              applicationText={item.applicationText}
              age={item.age}
              candidateId={item.id}
              id={id}
              onClickHandle={onClickHandle}
            />
          })}
        </Flex>
        <Flex flex={1} flexDir={'column'} align={'center'} px={50} w={600}>
        <Heading>Candidatos Aprovados</Heading>
          {approvedCandidates.map((item) => {
            return <ApprovedCandidatesCard
              name={item.name}
              profession={item.profession}
              country={item.country}
              applicationText={item.applicationText}
              age={item.age}
            />
          })}
        </Flex>
      </Flex>
    </Flex>
  )
}
