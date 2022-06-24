import React, { Component } from 'react'
import styled from 'styled-components'

const Main = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`
const Card = styled.div`
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

export default class CreateContainer extends Component {
    render() {
        return (
            <Main>
                <Card>
                    <h3>Crie sua Playlist !</h3>
                    <CreateLabel>
                        <label forhtml='name'>Nome:</label>
                        <input type='text' id='name' name='name' onChange={this.props.handleNameChange}></input>
                    </CreateLabel>
                    <button onClick={this.props.createPlaylist}>Criar</button>
                </Card>
            </Main>
        )
    }
}
