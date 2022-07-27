import React, { useContext, useEffect } from 'react'
import { Input, Heading, Image, Button, Divider, Flex, FormControl, FormErrorMessage, Alert, AlertIcon, Box, AlertDescription, CloseButton, useDisclosure } from '@chakra-ui/react'
import Logo from '../img/logo.png'
import { Navigate, useNavigate, } from 'react-router-dom'
import { goToSignupPage } from '../routes/coordinator'
import { useForm } from '../hooks/useForm'
import { GlobalContext } from '../components/global/GlobalContext'

export default function Login() {
    const { form, onChange, } = useForm({ email: '', password: '' })
    const { errors, userLogin, loginError, setLoginError } = useContext(GlobalContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token')) {
          navigate('/feed')
        }
      })

    return (
        <Flex flexDir={'column'} align={'center'} h={'100vh-50px'} fontFamily={'Noto Sans'}>
            <Flex flexDir={'column'} align={'center'} justify={'center'} marginBottom={'104px'} marginTop={'89px'}>
                <Image src={Logo} />
                <Heading fontSize={'16px'} fontWeight={'300'}>O projeto de rede social da Labenu</Heading>
            </Flex>
            <Flex flexDir={'column'} align={'center'} justify={'center'} w={'88%'} marginBottom={'56px'}>
                <FormControl id='email' isRequired isInvalid={errors.email}>
                    <Input placeholder="Nome" h={'60px'} onChange={onChange} name='email' type='email' />
                    <FormErrorMessage>Email inválido ou não cadastrado</FormErrorMessage>
                </FormControl>
                <FormControl id='password' isRequired isInvalid={errors.password}>
                    <Input placeholder="Senha" marginTop={'8px'} h={'60px'} onChange={onChange} name='password' type='password' />
                    <FormErrorMessage>Senha Inválida</FormErrorMessage>
                </FormControl>
                {loginError && <Alert status='error' marginTop={'8px'}>
                    <AlertIcon />
                    <Box>
                        <AlertDescription>
                            Usuário ou senha inválidos.
                        </AlertDescription>
                    </Box>
                    <CloseButton
                        marginLeft={'50px'}
                        onClick={() => setLoginError(false)}
                    />
                </Alert>}
            </Flex>
            <Button
                background={'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)'}
                w={'88%'}
                color={'white'}
                borderRadius={'27px'}
                fontWeight={'700'}
                fontSize={'18px'}
                marginBottom={'18px'}
                paddingY={'25px'}
                onClick={() => userLogin(form)}>
                Continuar</Button>
            <Divider background={'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)'} h={'1px'} w={'88%'} marginBottom={'18px'} />
            <Button
                background={'white'}
                border={'1px solid #FE7E02'}
                w={'88%'}
                color={'#FE7E02'}
                borderRadius={'27px'}
                fontWeight={'700'}
                fontSize={'18px'}
                paddingY={'25px'}
                onClick={() => goToSignupPage(navigate)}>
                Crie uma conta!</Button>
        </Flex>
    )
}
