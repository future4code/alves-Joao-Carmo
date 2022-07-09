import React from 'react'
import styled from 'styled-components'
import { Flex, Image, Heading, Container } from '@chakra-ui/react'
import '../index.css'



const ContainerItem = styled.div`
display:flex;
flex-direction: column;
align-items: center;
height: 25vh;
width: 10vw;
margin: 1vh 0.5vw;
border-radius: 10px;
`

export default function Matches({ matches }) {

    const listaMatches = matches.map((item => {
        return <ContainerItem>
            <Image src={item.photo} alt={item.photo_alt} h='18vh' w='100%' borderRadius='20px'/>
            <Container>
                <Heading size='sm' align='center' justify='center' margin='5px' fontFamily='Exo,sans-serif'>{item.name}</Heading>
            </Container>
        </ContainerItem>
    }))

    return (
        <Flex flexWrap='wrap' overflow='unset' justify='center'> 
            {listaMatches.length === 0 ? <Heading marginTop='35vh' fontFamily='Exo,sans-serif'>Nenhum match ainda...</Heading> : listaMatches}
        </Flex>
    )
}
