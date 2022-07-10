import { useState, useEffect, useDisclosure } from "react";
import * as React from 'react'
import styled from "styled-components";
import axios from "axios";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import SwitchComponents from "./components/SwitchComponents";
import Matches from "./components/Matches";
import MatchAlert from "./components/MatchAlert";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import ProfileEmpty from "./components/ProfileEmpty";
import { motion } from "framer-motion"

const Main = styled.div`
padding:25px;
height: auto;
display: flex;
justify-content: center;
align-items: center;
background-color: #FF7F47;
overflow: scroll-y;
`

function App() {
  const [profile, setProfile] = useState({})
  const [matches, setMatches] = useState([])
  const [activeComponent, setActiveComponent] = useState('profiles')
  const [isMatch, setIsMatch] = useState('')

  useEffect(() => {
    getProfile()
    getMatches()
  }, [])

  const getProfile = () => {
    axios
      .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-colodetti/person')
      .then((res) => {
        setProfile(res.data.profile)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getMatches = () => {
    axios
      .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-colodetti/matches')
      .then((res) => {
        setMatches(res.data.matches)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const resetProfiles = () => {
    axios
      .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-colodetti/clear')
      .then(getProfile())
      .catch((err) => {
        console.log(err)
      })
  }

  const decisionProfile = (id, choice) => {
    const body = {
      id: id,
      choice: choice
    }
    axios
      .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-colodetti/choose-person', body)
      .then((res) => {
        console.log(res.data.isMatch)
        setIsMatch(res.data.isMatch)
        if (choice === true && res.data.isMatch === false) {
          getProfile()
        } else if (choice === false) {
          getProfile()
        }
        getMatches()
      })

  }

  const isMatchSwitcher = () => {
    setIsMatch(false)
    getProfile()
  }

  const appSwitcher = (name) => {
    setActiveComponent(name)
  }

  return (
    <Main>
      <Flex justifyContent='flex-start' border='4px' flexDir='column' w='28%' justifySelf='center' alignSelf='center' borderRadius='40px' minH='95vh' paddingTop='15px' backgroundColor='white'>
        <Header appSwitcher={appSwitcher} activeComponent={activeComponent} />
        <SwitchComponents active={activeComponent}>
          <div name='profiles'>
            {profile && <ProfileCard profile={profile} getProfile={getProfile} decisionProfile={decisionProfile} />}
            {isMatch && <MatchAlert appSwitcher={appSwitcher} isOpen={isMatch} profile={profile} isMatchSwitcher={isMatchSwitcher} />}
            {profile == null && <ProfileEmpty resetProfiles={resetProfiles} />}
          </div>
          <Matches name={'matches'} matches={matches} />
        </SwitchComponents>
      </Flex>
    </Main>
  );
}

export default App;
