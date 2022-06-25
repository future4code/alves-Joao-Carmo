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
:hover{
    cursor: pointer;
}
`

const Info = styled.div`
padding: 24px 16px;
display: flex;
justify-content: space-between;
:hover{
    cursor: pointer;
}
`

export default class PlaylistCard extends Component {

    
    render() {
        return (
            <Main onClick={this.props.info}>
                <Image src='https://picsum.photos/290/150'/>
                <Info onClick={this.props.info}>
                    <Title onClick={this.props.info}>{this.props.name}</Title>
                    <button onClick={this.props.delete}>Remove</button>
                </Info>
            </Main>
        )
    }
}

