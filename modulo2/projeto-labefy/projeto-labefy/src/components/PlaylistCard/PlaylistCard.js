import React, { Component } from 'react'
import styled from 'styled-components'

const Main = styled.div`
height: 30vh;
width: 14vw;
border: 1px solid black;
border-radius: 16px;
background-color: black;
`

const Image = styled.img`
width: 100%;
height: 60%;
border-radius: 16px;
:hover{
    cursor: pointer;
}
`

const Title = styled.h3`
margin: 0;
overflow: hidden;
text-overflow: ellipsis;
opacity: 0.7;

:hover{
    cursor: pointer;
    opacity: 1;
}
`

const Info = styled.div`
padding: 24px 16px;
display: flex;
flex-direction: column;
gap: 2vh;
justify-content: space-between;
:hover{
    cursor: pointer;
}
`

const RemoveBtn = styled.button`
height: 3vh;
width: 28%;
align-self: center;
opacity: 0.5;
font-weight: bold;
border-radius: 8px;
:hover{
    cursor: pointer;
    opacity: 1;
    background-color: red;
    color: white;
}
`

export default class PlaylistCard extends Component {

    
    render() {
        return (
            <Main>
                <Image src='https://picsum.photos/290/150' onClick={this.props.info}/>
                <Info>
                    <Title onClick={this.props.info}>{this.props.name}</Title>
                    <RemoveBtn onClick={this.props.delete}>Remove</RemoveBtn>
                </Info>
            </Main>
        )
    }
}

