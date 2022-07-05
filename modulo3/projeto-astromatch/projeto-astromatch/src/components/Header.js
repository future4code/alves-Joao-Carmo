import React from 'react'
import styled from 'styled-components'
import { Heading, Button, ButtonGroup } from '@chakra-ui/react'

const Main = styled.div`
width: 100%;
display:flex;
flex-direction:row;
justify-content: space-around;
padding: 10px;
align-items: flex-end;
`


export default function Header({ appSwitcher, activeComponent }) {
    return (
        <Main>
            <Heading size='2xl' color='brown'>AstroMatch</Heading>
            {(activeComponent === 'profiles') ? 
            <Button onClick={() => appSwitcher('matches')} variant='ghost' w='35%' alignSelf='center' padding='0'>Ir para Matches</Button> : 
            <Button onClick={() => appSwitcher('profiles')} variant='ghost' w='35%' alignSelf='center' padding='0'>Voltar para Perfis</Button>}
        </Main>
    )
}
