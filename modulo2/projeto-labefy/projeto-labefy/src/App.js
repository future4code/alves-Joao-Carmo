import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import SwitchComponents from './components/SwitchComponents/SwitchComponents'
import PlaylistCard from './components/PlaylistCard/PlaylistCard'
import NavBar from './components/NavBar/NavBar'
import CreateContainer from './components/CreateContainer/CreateContainer'
import PlaylistInfo from './components/PlaylistInfo/PlaylistInfo'
import Login from './components/Login/Login'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import Home from './components/Home/Home'
import SuccessContainer from './components/SuccessContainer/SuccessContainer'
import Biblioteca from './components/Biblioteca/Biblioteca'


const code = new URLSearchParams(window.location.search).get('code')

const Main = styled.div`
display: flex;
font-family: 'Montserrat', sans-serif;
background-color: #121212;
color: white;
`
const MyPlaylistsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`
const PlaylistsDisplay = styled.div`
display: grid;
grid-template-columns: auto auto auto auto auto;
column-gap: 1vw;
row-gap: 3vh;
`

export default class App extends Component {
  state = {
    nameInput: '',
    playlists: [],
    playlistTracks: [],
    playlistName: '',
    playlistId: '',
    activeComponent: 'home'
  }

  loginStatus = () => {
    return code ? this.setState({ activeComponent: 'create' }) : this.setState({ activeComponent: 'login' })
  }
  componentDidMount = () => {
    this.getAllPlaylists()
    this.loginStatus()
  }

  handleNameChange = (event) => {
    this.setState({ nameInput: event.target.value })
  }

  createPlaylist = () => {
    const body = {
      name: this.state.nameInput,
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
      headers: {
        Authorization: 'joao-colodetti-alves'
      }
    }).then(() => {
      this.getAllPlaylists()
      this.setState({ activeComponent: 'create-success' })
    }).catch(() => {
      alert('Já existe uma playlist com esse nome')
    })
  }

  getAllPlaylists = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers: {
        Authorization: 'joao-colodetti-alves'
      }
    }).then((response) => {
      this.setState({ playlists: response.data.result.list })
    }).then(() => {
      console.log(this.state.playlists)
    })
  }

  deletePlaylist = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
      headers: {
        Authorization: 'joao-colodetti-alves'
      }
    }).then(() => {
      this.getAllPlaylists()
    }).then(() => {
      alert('Playlist deletada com sucesso')
    })
  }

  getPlaylistTracks = (id, name) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
      headers: {
        Authorization: 'joao-colodetti-alves'
      }
    }).then((response) => {
      this.setState({ playlistTracks: response.data.result.tracks })
    }).then(() => {
      this.setState({ activeComponent: 'playlist-info' })
    }).then(() => {
      this.getPlaylistName(name)
    }).then(() => {
      this.searchPlaylist(name)
    })
  }

  appSwitcher = (id) => {
    this.setState({ activeComponent: id })
    console.log(id, this.state.activeComponent)
  }

  getPlaylistName = (name) => {
    this.setState({ playlistName: name })
  }

  searchPlaylist = (name) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${name}`, {
      headers: {
        Authorization: 'joao-colodetti-alves'
      }
    }).then((response) => {
      this.setState({ playlistId: response.data.result.playlist[0].id })
    }).then(() => {
      this.addToPlaylist(this.state.playlistId)
    })
  }

  render() {

    const playlistsList = this.state.playlists.map((item) => {
      return <PlaylistCard name={item.name} delete={() => this.deletePlaylist(item.id)} info={() => this.getPlaylistTracks(item.id, item.name)} />
    })

    return (
      <Main>
        <NavBar appSwitcher={this.appSwitcher} />
        <SwitchComponents active={this.state.activeComponent}>
          <Login name='login' code={code}/>
          <Home name='home'/>
          <CreateContainer name='create' createPlaylist={this.createPlaylist} handleNameChange={this.handleNameChange} />
          <SuccessContainer name='create-success' appSwitcher={this.appSwitcher}></SuccessContainer>
          <MyPlaylistsContainer>
            <h3>Biblioteca</h3>
            <PlaylistsDisplay>
              {playlistsList}
            </PlaylistsDisplay>
          </MyPlaylistsContainer>
          <Biblioteca playlistList={playlistsList} name='my-playlists'></Biblioteca>
          <PlaylistInfo name='playlist-info' playlistTracks={this.state.playlistTracks} playlistName={this.state.playlistName} playlistId={this.state.playlistId} getPlaylistTracks={this.getPlaylistTracks} />
        </SwitchComponents>
      </Main>
    )
  }
}
