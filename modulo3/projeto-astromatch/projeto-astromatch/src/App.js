import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import SwitchComponents from "./components/SwitchComponents";
import Matches from "./components/Matches";

const Main = styled.div`
padding: 20px;
`

function App() {
  const [profile, setProfile] = useState({})
  const [matches, setMatches] = useState([])
  const [activeComponent, setActiveComponent] = useState('profiles')

  useEffect(() => {
    getProfile()
    getMatches()
    console.log(profile)
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
        console.log(matches)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const resetProfiles = () => {
    axios
      .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-colodetti/clear')
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
        if (res.data.isMatch === true) { 
          alert('Deu Match !')
        }
        getProfile()
        getMatches()
      })

  }

  const appSwitcher = (name) => {
    setActiveComponent(name)
  }


  return (
    <Main>
      <div>
        <Header appSwitcher={appSwitcher} activeComponent={activeComponent} />
        <SwitchComponents active={activeComponent}>
          <div name='profiles'>
          {profile && <ProfileCard profile={profile} getProfile={getProfile} decisionProfile={decisionProfile}/>}
          </div>
          <Matches name={'matches'} matches={matches} />
        </SwitchComponents>
        {profile == null && <button onClick={resetProfiles}>Resetar Perfis</button>}
      </div>
    </Main>
  );
}

export default App;
