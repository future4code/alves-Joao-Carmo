import React, { Component } from 'react'
import styled from 'styled-components'

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 100%;
`
const Container = styled.div`
width: 80%;
display: grid;
grid-template-columns: auto auto auto auto auto;
column-gap: 2vw;
row-gap: 5vh;
`

const Title = styled.h2`
font-size: 5rem;
margin: 15vh 0;
color: #29DC3E;
`
export default class Biblioteca extends Component {
    render() {
        return (
            <Main>
                <Title>Biblioteca</Title>
                <Container>
                    {this.props.playlistList}
                </Container>
            </Main>
        )
    }
}

