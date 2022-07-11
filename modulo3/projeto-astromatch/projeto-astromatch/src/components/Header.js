import React, { useState } from 'react'
import styled from 'styled-components'
import { Heading, Button, ButtonGroup, Tooltip, IconButton } from '@chakra-ui/react'
import { ChatIcon, ArrowLeftIcon, } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"

const element = <FontAwesomeIcon icon={faFire} />

const Main = styled.div`
width: 100%;
display:flex;
flex-direction:row;
justify-content: space-between;
padding: 15px 40px;
align-items: flex-end;
border-bottom: 2px solid black;
`


export default function Header({ appSwitcher, activeComponent }) {
    return (
        <Main>
            <Heading size='3xl' color='#FE3C72' fontFamily='Exo,sans-serif'>AstroMatch</Heading>
            {(activeComponent === 'profiles') ?

                <Tooltip label='Matches' fontSize='md' hasArrow placement='top'>
                    <motion.button whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
                        <IconButton onClick={() => appSwitcher('matches')} colorScheme='red' icon={element} size='lg' _hover={{ background: 'red', color: 'white' }} variant='outline' isRound alignSelf='center' marginBottom='5px'></IconButton>
                    </motion.button>
                </Tooltip>
                :
                <Tooltip label='Perfis' fontSize='md' hasArrow placement='top'>
                    <motion.button whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
                        <IconButton onClick={() => appSwitcher('profiles')} colorScheme='black' icon={<ArrowLeftIcon />} size='lg' _hover={{ background: 'black', color: 'white' }} variant='outline' isRound alignSelf='center' marginBottom='5px'></IconButton>
                    </motion.button>
                </Tooltip>
            }
        </Main>
    )
}
