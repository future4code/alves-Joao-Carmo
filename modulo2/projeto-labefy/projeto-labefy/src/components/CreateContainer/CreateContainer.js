import React, { Component } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/Input'

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
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
background-color: black;
color: white;
`
const CreateLabel = styled.div`
display: flex;
`

const Title = styled.h2`
font-size: 5rem;
color: #29DC3E;
`

const SubTitle = styled.h3`
font-size: 2rem;
margin: 0;
`
const NameInput = styled.input`
height: 5%;
width: 40%;
font-size: 2rem;
text-align: center;
outline: white;
`

const CreatBtn = styled.button`
height: 10%;
width: 15%;
background-color: black;
font-size: 2rem; 
color: #29DC3E;
border-radius: 16px;
opacity: 0.5;
:hover{
    cursor: pointer;
    opacity: 1;
    box-shadow: 1px 1px 20px gray;
}
`


export default class CreateContainer extends Component {

    render() {
        return (
            <Main>
                <Title>Crie sua Playlist !</Title>
                <NameInput type='text' id='name' name='name' onChange={this.props.handleNameChange} placeholder='Escolha um nome para sua nova playlist !'></NameInput>
                <CreatBtn onClick={this.props.createPlaylist}>Criar</CreatBtn>
            </Main>
        )
    }
}
