import React from 'react'
import styled from 'styled-components'
import { Heading, Button, ButtonGroup } from '@chakra-ui/react'

const Main = styled.div`
width: 100%;
display:flex;
flex-direction:row;
justify-content: space-around;
padding: 10px;
`


export default function Header({ appSwitcher, activeComponent }) {
    return (
        <Main>
            <Heading color='brown'>AstroMatch</Heading>
            {(activeComponent === 'profiles') ? 
            <Button onClick={() => appSwitcher('matches')} variant='ghost' w='40%'>Ir para Matches</Button> : 
            <Button onClick={() => appSwitcher('profiles')} w='40%'>Voltar para Perfis</Button>}
        </Main>
    )
}
