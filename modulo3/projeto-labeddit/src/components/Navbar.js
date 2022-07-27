import React from 'react'
import { Input, Heading, Image, Button, Divider, Flex, Link } from '@chakra-ui/react'
import NavLogo from '../img/nav-logo.png'
import CloseIcon from '../img/close.png'
import { Navigate, useNavigate } from 'react-router-dom'
import { goToLoginPage, goToFeedPage } from '../routes/coordinator'

export default function Navbar() {
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem('token')
    goToLoginPage(navigate)
  }

  return (
    <Flex h={'50px'} background={'#EDEDED'} align={'center'} fontFamily={'Noto Sans'} >
      <Flex marginLeft={'34px'} w={'25.6px'} h={'24px'}>
        {(window.location.pathname === '/post') && <Image src={CloseIcon} onClick={() => goToFeedPage(navigate)} />}
      </Flex>
      <Image src={NavLogo} h={'28.64px'} w={'28px'} justifySelf={'center'} marginLeft={'140.39px'} onClick={() => goToLoginPage(navigate)} />
      {(window.location.pathname === '/signup') &&
        <Link
          marginLeft={'115px'}
          fontSize={'18px'}
          color={'#4088CB'}
          fontWeight={'600'}
          lineHeight={'25px'}
          onClick={() => goToLoginPage(navigate)}
        >Entrar</Link>}
      {(window.location.pathname === '/feed' || window.location.pathname === '/post') &&
        <Link
          marginLeft={'100px'}
          fontSize={'18px'}
          color={'#4088CB'}
          fontWeight={'600'}
          lineHeight={'25px'}
          onClick={logOut}
        >Logout</Link>}
    </Flex>
  )
}
