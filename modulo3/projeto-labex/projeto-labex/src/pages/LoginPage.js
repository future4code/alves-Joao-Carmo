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
    FormErrorMessage,
    Alert,
    AlertIcon,
    CloseButton
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useForm } from '../hooks/useForm';

export default function SplitScreen() {
    const [errors, setErrors] = useState({ email: '', password: '', auth: '' })
    const { form, onChange, cleanFields } = useForm({ email: '', password: '' })


    let navigate = useNavigate()

    const getToken = (form) => {
        if (form.email === '' || !form.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setErrors({ email: true })
            return
        }
        if (form.password === '' || form.password.length < 6) {
            setErrors({ password: true })
            return
        }

        axios
            .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-colodetti-alves/login', form)
            .then((res) => {
                navigate('/admin/trips/list')
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', form.email.split('@')[0])
                cleanFields()
            })
            .catch((err) => {
                setErrors({ auth: true })
            })

    }

    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Image src={Logo} w={200} alignSelf='center' onClick={() => navigate('/')} _hover={{ cursor: 'pointer' }} />
                    <Heading fontSize={'2xl'}>Login como funcionário</Heading>
                    <FormControl id="email" isInvalid={errors.email}>
                        <FormLabel>Email</FormLabel>
                        <Input name='email' type="email" onChange={onChange} required />
                        <FormErrorMessage>Email inválido.</FormErrorMessage>
                    </FormControl>
                    <FormControl id="password" isInvalid={errors.password}>
                        <FormLabel>Senha</FormLabel>
                        <Input name='password' type="password" onChange={onChange} required />
                        <FormErrorMessage>Senha deve ter no mínimo 6 caracteres.</FormErrorMessage>
                    </FormControl>
                    <Stack spacing={6}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                            <Checkbox>Lembrar de mim</Checkbox>
                            <Link color={'blue.500'}>Forgot password?</Link>
                        </Stack>
                        {errors.auth && <Alert status='error' rounded={'xl'}>
                            <AlertIcon />
                            Email ou senha incorretos.
                            <CloseButton onClick={() => setErrors({ auth: false })}></CloseButton>
                        </Alert>}
                        <Button colorScheme={'purple'} variant={'solid'} onClick={() => getToken(form)}>
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