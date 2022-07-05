import React from 'react'
import { Center, Square, Circle, Flex, Image, Heading } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react'
import styled from 'styled-components'

const Info = styled.p`
padding-top: 12px;`

export default function MatchAlert({ appSwitcher, isOpen, profile, isMatchSwitcher }) {
    const { onOpen, onClose } = useDisclosure(true)
    return (
        <>
        <Flex flexDir='column' justifySelf='center' alignSelf='center' justifyContent='space-between'>
                <Modal isOpen={onOpen} onClose={isMatchSwitcher} size={'xl'} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <Heading color='#0BEBC3' alignSelf='center' padding='10px' size='4xl'>Deu Match!</Heading>
                        <ModalBody>
                            <Image src={profile.photo} fit align w='100%' h='50vh' margin='1vh 0'/>
                            <Heading>{profile.name}</Heading>
                            <Heading size='md'>{profile.age}</Heading>
                            <Info>{profile.bio}</Info>
                        </ModalBody>
                        <ModalFooter justifyContent='space-around'>
                            <Button colorScheme='orange' mr={3} onClick={isMatchSwitcher} variant='outline'>
                                Continuar Jogando
                            </Button>
                            <Button variant='ghost' onClick={() => appSwitcher('matches')} colorScheme='black'>Ir para Matches</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                </Flex>
        </>
    )
}
