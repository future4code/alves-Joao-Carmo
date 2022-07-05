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

export default function MatchAlert({ appSwitcher, isOpen, profile, isMatchSwitcher }) {
    const { onOpen, onClose } = useDisclosure(true)
    return (
        <>
        <Flex flexDir='column' w='28%' justifySelf='center' alignSelf='center' h='80vh' justifyContent='space-between'>
                <Modal isOpen={onOpen} onClose={isMatchSwitcher} size={'md'} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <Heading color='#0BEBC3' alignSelf='center' padding='10px' size='4xl'>Deu Match!</Heading>
                        <ModalBody>
                            <Image src={profile.photo} fit align w='100%' h='50vh'/>
                            <Heading>{profile.name}</Heading>
                            <Heading size='sm'>{profile.age}</Heading>
                            <p>{profile.bio}</p>
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
