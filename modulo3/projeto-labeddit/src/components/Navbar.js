import React from 'react'
import { Input, Heading, Image, Button, Divider, Flex, Link, Grid, GridItem } from '@chakra-ui/react'
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
    <Grid h={'50px'} background={'#EDEDED'} align={'center'} fontFamily={'Noto Sans'} templateColumns={'repeat(3, 1fr)'}>
      <GridItem w={'25.6px'} h={'24px'} alignSelf={'center'} justifySelf={'center'} _hover={{ cursor: 'pointer' }}>
        {window.location.pathname.includes('/posts') && <Image src={CloseIcon} onClick={() => goToFeedPage(navigate)} />}
      </GridItem>
      <Image src={NavLogo} h={'28.64px'} w={'28px'} justifySelf={'center'} onClick={() => goToLoginPage(navigate)} alignSelf={'center'} _hover={{ cursor: 'pointer' }} />
      {(window.location.pathname === '/signup') &&
        <GridItem
          fontSize={'18px'}
          color={'#4088CB'}
          fontWeight={'600'}
          lineHeight={'25px'}
          alignSelf={'center'}
        >
          <Link onClick={() => goToLoginPage(navigate)}>Entrar</Link></GridItem>}
      {(window.location.pathname === '/feed' || window.location.pathname.includes('/posts')) &&
        <GridItem
          fontSize={'18px'}
          color={'#4088CB'}
          fontWeight={'600'}
          lineHeight={'25px'}
          alignSelf={'center'}
        >
          <Link onClick={logOut}>Logout</Link></GridItem>}
    </Grid>
  )
}
