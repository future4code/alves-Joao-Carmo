import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Flex, Spacer, Heading, } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import '../index.css'
import {
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion"


const element = <FontAwesomeIcon icon={faHeart} />


const ButtonDiv = styled.div`
display:flex;
justify-content:space-around;
padding: 30px;
border-top: 2px solid black;
background-color: white;
border-radius: 0 0 40px 40px;
`

const CardBody = styled.div`
display:flex;
flex-direction:column;
padding: 15px;
height: 15vh;
background-color: white;
`

const ImageDiv = styled.div`
display:flex;
justify-content: center;
max-width: 100%;
background-color: white;
`

const Info = styled.p`
padding-top: 12px;`

export default function ProfileCard({ profile, getProfile, decisionProfile }) {
    const x = useMotionValue(0)

    return (
        <div>
            <Flex flexDirection='column' fontFamily='Exo,sans-serif' backgroundColor='#FF7F47' borderRadius='0 0 40px 40px'>
                <motion.div drag
                    dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                    style={{ x }}
                    whileDrag={{ rotate: 15 }}
                    transition={{ duration: 0.5, ease: 'linear' }}
                    dragElastic={0.4}
                    onDragEnd={() => decisionProfile(profile.id, true)}
                >
                    <ImageDiv>
                        <Image h='58vh' w='30vw' fit align src={profile.photo} alt={profile.photo_alt} pointerEvents='none' />
                    </ImageDiv>
                    <CardBody>
                        <Heading fontFamily='Exo,sans-serif'>{profile.name}, {profile.age}</Heading>
                        <Info>{profile.bio}</Info>
                    </CardBody>
                </motion.div>
                <ButtonDiv>
                    <motion.button whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}>
                        <IconButton onClick={() => decisionProfile(profile.id, false)} colorScheme='red' variant='outline' icon={<CloseIcon />} isRound size="lg" _hover={{ background: 'red', color: 'white' }}></IconButton>
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}>
                        <IconButton onClick={() => decisionProfile(profile.id, true)} colorScheme='green' variant='outline' icon={element} isRound size='lg' _hover={{ background: 'green', color: 'white' }}></IconButton>
                    </motion.button>
                </ButtonDiv>
            </Flex>
        </div>
    )
}
