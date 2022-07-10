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
                <Modal isOpen={onOpen} onClose={isMatchSwitcher} size={'xl'} isCentered motionPreset='slideInBottom'>
                    <ModalOverlay />
                    <ModalContent fontFamily='Exo,sans-serif'>
                        <Heading color='#0BEBC3' alignSelf='center' padding='35px' size='4xl' fontFamily='Exo,sans-serif'>Deu Match!</Heading>
                        <ModalBody>
                            <Image src={profile.photo} fit align w='100%' h='50vh' margin='1vh 0'/>
                            <Heading fontFamily='Exo,sans-serif'>{profile.name}, {profile.age}</Heading>
                            <Info>{profile.bio}</Info>
                        </ModalBody>
                        <ModalFooter justifyContent='space-around' padding='35px' fontFamily='Exo,sans-serif'>
                            <Button variant='outline' color='#FF7F47' mr={3} onClick={isMatchSwitcher} _hover={{ background: '#FF7F47', color: 'white' }} outlineColor='#FF7F47' outlineOffset='0'>
                                Continuar Jogando
                            </Button>
                            <Button variant='outline' onClick={() => appSwitcher('matches')} color='#FF7F47' _hover={{ background: '#FF7F47', color: 'white' }} outlineColor='#FF7F47' outlineOffset='0'>Ir para Matches</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                </Flex>
        </>
    )
}
