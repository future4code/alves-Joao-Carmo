import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=99573a5c6de44a92aaaaa437ffb6599d&response_type=token&redirect_uri=https://excellent-process.surge.sh/&scope=streaming"

const Main = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const LoginBtn = styled.a`
    width: 25%;
    border:0 ;
    background-color:green;
    font-weight: bold;
    color: white;
    border-radius: 8px;
    font-size: 1.7rem;
    text-decoration: none;
    text-align: center;
    justify-content: center;
    padding: 3vh 0;
    :hover {
        cursor: pointer;
        background-color: lightgreen;
        box-shadow: 2px 2px 15px gray;
    }
`


export default class Login extends Component {

    render() {
        return (
            <Main>
                <LoginBtn href={AUTH_URL}>Login com Spotify</LoginBtn>
            </Main>
        )
    }
}
