import React from 'react'
import HomeImage from '../img/image-home.jpg'
import Logo from '../img/logo.png'
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';

export default function SplitScreen() {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Image src={Logo} w={200} alignSelf='center' onClick={(e) => { e.preventDefault(); window.location.href = './' }} _hover={{cursor: 'pointer'}}/>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'purple.400',
                                zIndex: -1,
                            }}>
                            LabeX
                        </Text>
                        <br />{' '}
                        <Text color={'purple.500'} as={'span'} fontSize='4xl'>
                            Viagens Intergalácticas
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        Conheça cada cantinho do universo com todo luxo e segurança da galáxia.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Button
                            rounded={'full'}
                            bg={'purple.500'}
                            color={'white'}
                            _hover={{
                                bg: 'purple.600',
                            }}
                            onClick={(e) => { e.preventDefault(); window.location.href = '/list-trips' }}>
                            Viagens Disponíveis
                        </Button>
                        <Button rounded={'full'} onClick={(e) => { e.preventDefault(); window.location.href = '/login' }}>Login</Button>
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
