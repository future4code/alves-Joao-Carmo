import React from 'react'
import { Input, Heading, Image, Button, Divider, Flex, Link } from '@chakra-ui/react'
import NavLogo from '../img/nav-logo.png'
import { Navigate, useNavigate } from 'react-router-dom'
import { goToLoginPage } from '../routes/coordinator'

export default function Navbar() {
    const navigate = useNavigate()
  return (
    <Flex h={'50px'} background={'#EDEDED'} align={'center'} fontFamily={'Noto Sans'}>
        <Image src={NavLogo} h={'28.64px'} w={'28px'} justifySelf={'center'} marginLeft={'200px'} onClick={() => goToLoginPage(navigate)}/>
        {(window.location.pathname === '/signup') && <Link marginLeft={'115px'} fontSize={'18px'} color={'#4088CB'} fontWeight={'600'} lineHeight={'25px'}
        onClick={() => goToLoginPage(navigate)}
        >Entrar</Link>}
    </Flex>
  )
}
