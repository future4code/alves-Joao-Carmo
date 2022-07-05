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
  const [activeComponent, setActiveComponent] = useState('profiles')

  useEffect(() => {
    getProfile()
    console.log(profile)
  }, [])

  const getProfile = () => {
    axios
      .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-colodetti/person')
      .then((res) => {
        setProfile(res.data.profile)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const appSwitcher = (name) => {
    setActiveComponent(name)
  }

  return (
    <Main>
      <div>
      <Header appSwitcher={appSwitcher} activeComponent={activeComponent}/>
        <SwitchComponents active={activeComponent}>
          <ProfileCard profile={profile} name={'profiles'} getProfile={getProfile}/>
          <Matches name={'matches'}/>
        </SwitchComponents>
      </div>
    </Main>
  );
}

export default App;
