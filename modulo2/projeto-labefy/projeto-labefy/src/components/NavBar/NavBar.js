import React, { Component } from 'react'
import styled from 'styled-components'
import House from '../../img/house-48.png'

const NavItem = styled.div`
display:flex;
max-width: 100%;
justify-content: flex-start;
align-items: center;
gap: 12%;
padding-left: 1vw;
opacity: 0.5;
:hover {
  cursor: pointer;
  opacity: 1;
}
`
const Main = styled.div`
height: 100vh;
position: sticky;
top: 0;
width: 15%;
justify-content: center;
display: flex;
flex-direction: column;
background-color: black;
color: white;
`

const Title = styled.h3`
font-size: 1.1rem;
`

const Logo = styled.img`
height: 40%;
width: 8%;
`

export default class NavBar extends Component {
  state = {
    component: ''
  }

  render() {
    return (
      <Main>
        <NavItem onClick={() => this.props.appSwitcher('login')}>
            <h3>Login</h3>
        </NavItem>
        <NavItem onClick={() => this.props.appSwitcher('home')}>
          <Logo src={House} />
          <Title>Home</Title>
        </NavItem>
        <NavItem onClick={() => this.props.appSwitcher('create')}>
          <Logo src={House} />
          <Title>Criar Playlist</Title>
        </NavItem>
        <NavItem onClick={() => this.props.appSwitcher('my-playlists')}>
          <Logo src={House} />
          <Title>Biblioteca</Title>
        </NavItem>
      </Main>
    )
  }
}
