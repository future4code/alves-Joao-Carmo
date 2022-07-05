import React from 'react'
import styled from 'styled-components'
import { Flex, Image, Heading, Container, Button } from '@chakra-ui/react'


export default function ProfileEmpty({resetProfiles}) {
  return (
    <Flex justify='space-between' padding='20px' h='85vh' flexDir='column'>
        <Flex h='80%' justify='center' align='center'>
            <Heading>Não há mais pessoas perto de você</Heading>
        </Flex>
        <Button onClick={resetProfiles} colorScheme='black' variant='outline'>Resetar Perfis</Button>
    </Flex>
  )
}

