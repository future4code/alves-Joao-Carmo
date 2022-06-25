import React from 'react'
import styled from 'styled-components'

const authUrl = "https://accounts.spotify.com/authorize?client_id=99573a5c6de44a92aaaaa437ffb6599d&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

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
export default function Login() {
    return (
        <Main>
            <LoginBtn href={authUrl}>Login With Spotify</LoginBtn>
        </Main>
    )
}
