import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import axios, { AxiosError } from 'axios'
import AddImg from '../../img/icons8-mais-48.svg'
import AddImg2 from '../../img/icons8-play-48.png'
import Player from '../Player/Player'

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

const ListItem = styled.div`
display: inline-grid;
grid-template-columns: 5% 31% 31% 5% 31%;
justify-items: start;
width: 100%;
align-content: center;
opacity: 0.7;
:hover {
    cursor: pointer;
    opacity: 1;
}
`
const ListItem2 = styled.div`
display: inline-grid;
grid-template-columns: 5% 31% 31% 5% 31%;
justify-items: start;
width: 100%;
align-content: center;
`

const TopContainer = styled.div`
height: 40%;
width: 100%;
`
const BotContainer = styled.div`
width: 100%;
flex-direction: column;
`
const Image = styled.img`
width: 100%;
height: 100%;
`

const Title = styled.h2`
font-size: 3rem;
margin: 0;
padding: 16px 40px;
`

const SubTitle = styled.h3`
margin: 8px 0;
`

const AddContainer = styled.div`
flex-direction:column;
padding: 32px;
`
const ItemInfo = styled.p`
overflow: hidden;
text-overflow: ellipsis;
max-width: 100%;
display: block;
white-space: nowrap;
margin: 3% 5%;
`

const ListHeader = styled.div`
display: flex;
width: 100%;
background-color: black;
`

const SearchContainer = styled.div`
display: flex;
flex-direction:column;
width: 100%;
background-color: black;
${({ display }) => {
        return css`
            display: ${display ? 'flex' : 'none'};
        `;
    }}
`

const SearchList = styled.div`
display: inline-grid;
grid-template-columns: 5% 31% 31% 5% 31%;
justify-items: start;
border-bottom: 1px solid black;
width: 100%;
align-content: center;
opacity: 0.7;
:hover {
    cursor: pointer;
    opacity: 1;
}
`

const SearchItem = styled.p`
overflow: hidden;
text-overflow: ellipsis;
max-width: 80%;
display: block;
white-space: nowrap;
margin: 3% 5%;
align-items: center;
justify-content: center;
`

const Image1 = styled.img`
width:50%;
align-self: center;
justify-self: center;
:hover{
    cursor: pointer;
}
`
const SearchInput = styled.input`
height: 4vh;
width: 20%;
font-size: 2rem;
`
export default class PlaylistInfo extends Component {
    state = {
        nameInput: '',
        searchedMusic: [],
        playlistId: '',
        searchActive: false,
        tracksUri: '',
        play: false,
    }

    handleNameChange = (event) => {
        this.setState({ nameInput: event.target.value })
        axios.get(`https://api.spotify.com/v1/search?q=${event.target.value}&type=track%2Cartist&market=BR&limit=15`, {
            headers: {
                Authorization: `Bearer ${this.props.token}`
            }
        }).then((response) => {
            this.setState({ searchedMusic: response.data.tracks.items })
            this.setState({ searchActive: true })
            console.log(response.data.tracks.items)
        }).catch((error) => {
            console.log(error)
        })
    }

    addToPlaylist = (id, name, artist, url) => {
        const body = {
            name: name,
            artist: artist,
            url: url
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, {
            headers: {
                Authorization: 'joao-colodetti-alves'
            }
        }).then(() => {
            this.props.getPlaylistTracks(this.props.playlistId, this.props.playlistName)
        })
    }

    getUri = (name) => {
        axios.get(`https://api.spotify.com/v1/search?q=${name}&type=track%2Cartist&market=BR&limit=1`, {
            headers: {
                Authorization: `Bearer ${this.props.token}`
            }
        }).then((response) => {
            this.setState({ tracksUri: response.data.tracks.items[0].uri })
            this.setState({ play: !this.state.play })
            console.log(response.data.tracks.items[0].uri)
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {

        const searchedMusicList = this.state.searchedMusic.map((item) => {
            return <SearchList >
                <Image1 src={AddImg} onClick={() => this.addToPlaylist(this.props.playlistId, item.name, item.artists.map((item) => { return item.name }), item.album.name)} />
                <SearchItem>{item.name}</SearchItem>
                <SearchItem>{item.artists.map((item) => { return item.name })}</SearchItem>
                <Image1 src={item.album.images[0].url} />
                <SearchItem>{item.album.name}</SearchItem>
            </SearchList>
        })

        const playlistInfo = this.props.playlistTracks.map((item) => {
            return <ListItem onClick={() => this.getUri(item.name)}>
                <Image1 src={AddImg2} />
                <ItemInfo>{item.name}</ItemInfo>
                <ItemInfo>{item.artist}</ItemInfo>
                <ItemInfo></ItemInfo>
                <ItemInfo>{item.url}</ItemInfo>
            </ListItem>
        })

        return (
            <Main>
                <TopContainer>
                    <Image src='https://picsum.photos/1500/393'></Image>
                </TopContainer>
                <BotContainer>
                    <Title>{this.props.playlistName}</Title>
                    <AddContainer>
                        <SubTitle>Procurar Músicas:</SubTitle>
                        <SearchInput type='text' onChange={this.handleNameChange}></SearchInput>
                    </AddContainer>
                </BotContainer>
                <SearchContainer display={this.state.searchActive}>
                    <ListItem2>
                        <ItemInfo></ItemInfo>
                        <ItemInfo><strong>Nome</strong></ItemInfo>
                        <ItemInfo><strong>Artista</strong></ItemInfo>
                        <ItemInfo></ItemInfo>
                        <ItemInfo><strong>Álbum</strong></ItemInfo>
                    </ListItem2>
                </SearchContainer>
                {searchedMusicList}
                <ListHeader>
                    <ListItem2>
                        <ItemInfo></ItemInfo>
                        <ItemInfo><strong>Título</strong></ItemInfo>
                        <ItemInfo><strong>Artista</strong></ItemInfo>
                        <ItemInfo></ItemInfo>
                        <ItemInfo><strong>Álbum</strong></ItemInfo>
                    </ListItem2>
                </ListHeader>
                {playlistInfo}
                <Player accessToken={this.props.token} trackUri={this.state.tracksUri} play={this.state.play}></Player>
            </Main>
        )
    }
}
