import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Main = styled.div`
display: flex;
justify-content: center;
padding: 24px;
font-family: 'Montserrat', sans-serif;
`
const CreateContainer = styled.div`
display: flex;
width: 20vw;
height: 20vh;
border: 1px solid black;
flex-direction: column;
align-items: center;
gap: 10%;
`
const CreateLabel = styled.div`
display: flex;
`


export default class App extends Component {
  state = {
    nameInput: '',
  }

  handleNameChange = (event) => {
    this.setState({nameInput: event.target.value})
  }

  createPlaylist = () => {
    const body = {
      name: this.state.nameInput,
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
      headers: {
        Authorization: 'joao-colodetti-alves'
      }
    }).then((response) => {
      console.log(response)
    })
  }

  render() {
    return (
      <Main>
        <CreateContainer>
          <h3>Crie sua Playlist !</h3>
          <CreateLabel>
            <label forhtml='name'>Nome:</label>
            <input type='text' id='name' name='name' onChange={this.handleNameChange}></input>
          </CreateLabel>
          <button onClick={this.createPlaylist}>Criar</button>
        </CreateContainer>
      </Main>
    )
  }
}
