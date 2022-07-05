import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Flex, Spacer, Heading } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faHeart} />

const ButtonDiv = styled.div`
display:flex;
justify-content:space-around;
padding: 30px;
`

const CardBody = styled.div`
display:flex;
flex-direction:column;
padding: 15px;
height: 15vh;
`

const ImageDiv= styled.div`
display:flex;
justify-content: center;
max-width: 100%;
`

const Info = styled.p`
padding-top: 12px;`

export default function ProfileCard({ profile, getProfile, decisionProfile }) {

    return (
        <div>
            <Flex flexDirection='column'>
                <ImageDiv>
                    <Image h='58vh' w='30vw' fit align src={profile.photo} alt={profile.photo_alt} />
                </ImageDiv>
                <CardBody>
                    <Heading>{profile.name}</Heading>
                    <Heading size='lg'>{profile.age} anos</Heading>
                    <Info>{profile.bio}</Info>
                </CardBody>
                <ButtonDiv>
                    <IconButton onClick={() => decisionProfile(profile.id, true)} colorScheme='green' variant='outline' icon={element} isRound size='lg' _hover={{background: 'green', color: 'white'}}></IconButton>
                    <IconButton onClick={() => decisionProfile(profile.id, false)} colorScheme='red' variant='outline' icon={<CloseIcon />} isRound size="lg" _hover={{background: 'red', color: 'white'}}></IconButton>
                </ButtonDiv>

            </Flex>
        </div>
    )
}
