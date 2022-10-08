import React from 'react'
import {
    Divider,
    Flex,
    Heading,
    Image,
    Link,
    Text,
} from '@chakra-ui/react';

export default function UserCard({ response, repositories }) {
    return (
        <>
            <Flex flexDir={'column'} justify={'center'} borderRadius={'32px'} padding={'2rem'} boxShadow={'2xl'} marginY={'40px'}>
                <Flex gap={'2rem'} textAlign={'center'} justify={'center'}>
                    <Image src={response.avatar_url} w={'300px'} borderRadius={'50%'} />
                    <Flex flexDir={'column'} gap={'1.5rem'} justify={'center'} align={'center'}>
                        <Heading>{response.name}</Heading>
                        <Text fontWeight={600} color={'gray.500'}>{response.login}</Text>
                        {response.email !== null && <Text>{response.email}</Text>}
                        {response.bio !== null && <Text fontWeight={600}>{response.bio}</Text>}
                        <Flex justify={'center'} gap={'2rem'}>
                            <Text>Followers <Text fontWeight={700}>{response.followers}</Text></Text>
                            <Text>Following <Text fontWeight={700}>{response.following}</Text></Text>
                        </Flex>
                        <Text fontWeight={700} color={'gray.600'}>{response.location}</Text>
                    </Flex>
                </Flex>
                <Flex marginTop={'3rem'} flexDir={'column'} >
                    <Heading fontSize={'3xl'} padding={'1rem'}>Repositories</Heading>
                    <Divider />
                    <Flex flexWrap={'wrap'} gap={'1rem'} marginTop={'20px'}>
                        {repositories.length > 0 && repositories.map((item) => {
                            return <Flex flexDir={'column'} w={'48.5%'} gap={'10px'} padding={'1rem'}>
                                <Link href={item.html_url} target="_blank">
                                    <Text fontWeight={700}fontSize={'1.1rem'}  _hover={{cursor: 'pointer'}}>{item.name}</Text>
                                </Link>
                                <Text fontSize={'0.9rem'}>{item.description}</Text>
                            </Flex>
                        })}
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

