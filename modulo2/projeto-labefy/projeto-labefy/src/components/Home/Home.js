import React, { Component } from 'react'
import styled from 'styled-components'
import Arrow from '../../img/angles-right-solid.svg'

const Main = styled.div`
width: 100%;
flex-direction:column;
`

const Container = styled.div`
display: flex;
height: 30%;
width: 100%;
align-items: center;
justify-content: center;
color: white;
`
const Title = styled.h1`
font-size: 5rem;
`

const Title2 = styled.h1`
font-size: 5rem;
color: #29DC3E;
margin-left: 24px;
`
const MiddleContainer = styled.div`
height: 20%;
align-items: center;
justify-content: center;
display: flex;
color: white;
`

const BotCotainer = styled.div`
height: 50%;
display: flex;
align-items: center;
justify-content: space-evenly;
`

const SubTitle = styled.h2`
font-size: 2.5rem;
margin: 0;
`

const Card = styled.div`
height: 60%;
width: 20%;
border: 1px solid black;
border-radius: 32px;
align-items: center;
justify-content: center;
display:flex;
flex-direction: column;
text-align: center;
background-color: black;
color: white;
`

const CardInfo = styled.h3`
font-size: 2rem;
margin: 0;
`

const CardInfo2 = styled.h3`
font-size: 2rem;
color:#29DC3E;
margin: 0;
`
const Image1 = styled.img`
width: 7%;
`
export default class Home extends Component {
    render() {
        return (
            <Main>
                <Container>
                    <Title>Bem-vindo ao</Title>
                    <Title2>Labefy</Title2>
                </Container>
                <MiddleContainer>
                    <SubTitle>Aqui você pode:</SubTitle>
                </MiddleContainer>
                <BotCotainer>
                    <Card>
                        <CardInfo>Criar novas playlists</CardInfo>
                    </Card>
                    <Image1 src={Arrow} />
                    <Card>
                        <CardInfo>Adicionar sua músicas preferidas, diretamente do</CardInfo>
                        <CardInfo2>Spotify</CardInfo2>
                    </Card>
                    <Image1 src={Arrow} />
                    <Card>
                        <CardInfo>E poder escutar todas elas !</CardInfo>
                    </Card>
                </BotCotainer>
            </Main>
        )
    }
}
