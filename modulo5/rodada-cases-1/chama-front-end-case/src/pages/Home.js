import React from 'react'
import { Button, Flex, Text, Alert, AlertIcon, AlertTitle, Stack, InputGroup, InputLeftElement, Input, Heading, Divider } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';

export default function Home() {
    const [searchInput, setSearchInput] = useState('')
    const [searchResponse, setSearchResponse] = useState([])
    const [searchError, setSearchError] = useState(false)
    const [user, setUser] = useState('')
    const [userNotFound, setUserNotFound] = useState(false)
    const [repositories, setRepositories] = useState([])
    const [errorRepositories, setErrorRepositories] = useState(false)

    const onChangeHandler = (e) => {
        setSearchInput(e)
        setSearchError(false)
        if (e.length > 3) {
            axios.get(`https://api.github.com/search/users?q=${e}&per_page=10`)
                .then((res) => {
                    const temp = res.data.items
                    setSearchResponse(temp)
                    console.log(res.data.items)
                    console.log(searchResponse)

                })
                .catch((err) => {
                    setSearchError(true)
                })

        }
    }

    const getUser = (username) => {
        setSearchError(false)
        setSearchInput('')
        setSearchResponse([])
        axios.get(`https://api.github.com/users/${username}`)
            .then((response) => {
                console.log(response.data)
                setUser(response.data)
                setSearchInput('')
                setUserNotFound(false)
            })
            .catch((err) => {
                setUserNotFound(true)
            })

        axios.get(`https://api.github.com/users/${username}/repos`)
            .then((res) => {
                if (res.data.length > 10) {
                    const repos = res.data.slice(0, 10)
                    setRepositories(repos)
                } else {
                    setRepositories(res.data)
                }
                console.log(res.data.slice(0, 10))
            })
            .catch((err) => {
                setErrorRepositories(true)
            })
    }

    return (
        <Flex flexDir={'column'} w={'50%'} minH={'101vh'} justify={'center'} align={'center'} margin={'auto'}>
            <Heading marginY={'40px'}>Search Github users</Heading>
            <Flex justify={'center'} w={'100%'} gap={'20px'}>
                <Flex flexDir={'column'} w={'40%'}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<SearchIcon color='gray.300' />}
                        />
                        <Input type='username' placeholder='Username' onChange={(e) => onChangeHandler(e.target.value)} value={searchInput} />
                    </InputGroup>
                    {(searchResponse.length > 0) && <Flex flexDir={'column'} justify={'flex-start'} align={'flex-start'} w={'100%'} paddingX={'10px'} borderX={'1px solid gray'} borderBottom={'1px solid gray'} background={'#F5F5F5'}>
                        {(searchResponse.length > 0 && !searchError) && searchResponse.map((item) => {
                            return <>
                                <Text margin={'5px'} w={'100%'} onClick={() => getUser(item.login)} _hover={{ cursor: 'pointer' }}>{item.login}</Text>
                                <Divider />
                            </>
                        })
                        }
                        {searchError && <Text margin={'5px'}>Muitas requests, espere alguns segundos...</Text>}
                    </Flex>
                    }
                </Flex>
                <Button onClick={() => getUser(searchInput)}>Search</Button>
            </Flex>
            <Flex flexDir={'column'} justify={'center'} align={'center'} marginY={'40px'}>
                {(user && !userNotFound) && <UserCard response={user} repositories={repositories} />}
                {userNotFound &&
                    <Alert status='error' marginTop={'40px'}>
                        <AlertIcon />
                        <AlertTitle>Usuário não encontrado</AlertTitle>
                    </Alert>
                }
            </Flex>
        </Flex>
    )
}
