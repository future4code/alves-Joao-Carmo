import React, { useState } from 'react';
import HomeImage from '../img/image-home.jpg'
import Logo from '../img/logo.png'
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function SplitScreen() {
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    let navigate = useNavigate()

    const handleEmailInput = (e) => {
        setEmailInput(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setPasswordInput(e.target.value)
    }

    const getToken = () => {
        const body = {
            email: emailInput,
            password: passwordInput
        }
        axios
        .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-colodetti-alves/login', body)
        .then((res) => {
            console.log(res)
            navigate('/admin/trips/list')
            localStorage.setItem('token', res.data.token)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Image src={Logo} w={200} alignSelf='center' onClick={() => navigate('/')} _hover={{cursor: 'pointer'}}/>
                    <Heading fontSize={'2xl'}>Login como funcionário</Heading>
                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input type="email" onChange={handleEmailInput}/>
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Senha</FormLabel>
                        <Input type="password" onChange={handlePasswordInput}/>
                    </FormControl>
                    <Stack spacing={6}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                            <Checkbox>Lembrar de mim</Checkbox>
                            <Link color={'blue.500'}>Forgot password?</Link>
                        </Stack>
                        <Button colorScheme={'purple'} variant={'solid'} onClick={getToken}>
                            Login
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        HomeImage
                    }
                />
            </Flex>
        </Stack>
    );
}