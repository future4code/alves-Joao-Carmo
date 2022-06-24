import React, { Component } from 'react'
import styled from 'styled-components'

const NavItem = styled.div`
display:flex;
width: 100%;
justify-content: center;
border-bottom: 1px solid black;
:hover {
  background-color: gray;
  color: white;
  cursor: pointer;
}
`
const Main = styled.div`
height: 100vh;
position: sticky;
top: 0;
width: 15%;
border-right: 2px solid black;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
`

export default class NavBar extends Component {
    state = {
        component: ''
    }

  render() {
    return (
      <Main>
        <NavItem onClick={() => this.props.appSwitcher('create')}>
            <h3>Criar Playlist</h3>
        </NavItem>
        <NavItem onClick={() => this.props.appSwitcher('my-playlists')}>
            <h3>Minhas Playlists</h3>
        </NavItem>
      </Main>
    )
  }
}
