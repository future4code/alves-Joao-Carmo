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
    useAnimation,
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

const ConfirmationDiv= styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export default function ProfileCard({ profile, getProfile, decisionProfile }) {
    const x = useMotionValue(0)
    const rotateValue = useTransform(x, [-600, 600], [-40, 40])
    const opacityValue = useTransform(
        x,
        [-200, -150, 0, 150, 200],
        [0.7, 0.9, 1, 0.9, 0.7]
    )
    const opacityValue2 = useTransform(
        x,
        [-200, -150, 0, 150, 200],
        [0, 0, 0, 0.5, 1]
    )
    const opacityValue3 = useTransform(
        x,
        [-200, -150, 0, 150, 200],
        [1, 0.5, 0, 0, 0]
    )

    return (
        <div>
            <Flex flexDirection='column' fontFamily='Exo,sans-serif' backgroundColor='#FF7F47' borderRadius='0 0 40px 40px'>
                <motion.div drag
                    style={{
                        x: x,
                        rotate: rotateValue,
                        opacity: opacityValue,
                        cursor: "grab",
                    }}
                    dragConstraints={{
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: 0
                    }}
                    rotate={rotateValue}
                    opacity={opacityValue}
                    dragTransition={{ bounceStiffness: 1000, bounceDamping: 28 }}
                    whileTap={{ cursor: "grabbing" }}
                    onDragEnd={(event, info) => {
                        if (Math.abs(info.point.x) >= 1400) {
                            decisionProfile(profile.id, true)
                        } else if (Math.abs(info.point.x) <= 400) {
                            decisionProfile(profile.id, false)
                        }
                    }}
                >
                    <motion.div
                        style={{
                            opacity: opacityValue2,
                            position: "absolute",
                            color: 'green',
                            justifyContent: 'center',
                            alignContent: 'center',
                            height: 400,
                            width: 500
                        }}
                    >
                        <ConfirmationDiv>
                            <Heading fontSize='9xl'>LIKE!</Heading>
                        </ConfirmationDiv>
                    </motion.div>
                    <motion.div
                        style={{
                            opacity: opacityValue3,
                            position: "absolute",
                            color: 'red',
                            justifyContent: 'center',
                            alignContent: 'center',
                            height: 400,
                            width: 500
                        }}
                    >
                        <ConfirmationDiv>
                            <Heading fontSize='9xl'>DISLIKE!</Heading>
                        </ConfirmationDiv>
                    </motion.div>
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
        </div >
    )
}
