import React, { Component } from 'react'
import styled from 'styled-components'

const Main = styled.div`
width: 100%;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title = styled.h2`
font-size: 5rem;
`

const SubTitle = styled.h3`
font-size: 2rem;
`

const FwdButton = styled.button`
height: 10%;
width: 20%;
background-color: black;
font-size: 2rem; 
color: #29DC3E;
border-radius: 16px;
margin-top: 20vh;
opacity: 0.5;
:hover{
    cursor: pointer;
    opacity: 1;
    box-shadow: 1px 1px 20px gray;
}
`
export default class SuccessContainer extends Component {
  render() {
    return (
      <Main>
        <Title>Parabéns!</Title>
        <SubTitle>Sua playlist foi criada com sucesso.</SubTitle>
        <FwdButton onClick={() => this.props.appSwitcher('my-playlists')}>Ir para a Biblioteca</FwdButton>
      </Main>
    )
  }
}

