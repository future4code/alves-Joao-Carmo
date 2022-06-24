import React, { Component } from 'react'
import styled from 'styled-components'
import axios, { AxiosError } from 'axios'
import AddImg from '../../img/circle-plus-solid.svg'

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

const ListItem = styled.div`
display: inline-grid;
grid-template-columns: 4% 32% 32% 32%;
justify-items: start;
border-bottom: 1px solid black;
width: 100%;
align-content: center;
`

const TopContainer = styled.div`
height: 40%;
width: 100%;
border-bottom: 2px solid black;
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
margin: 3% 10%;
`

const ListHeader = styled.div`
display: flex;
width: 100%;
background-color: lightyellow;
`

const SearchContainer = styled.div`
display: flex;
flex-direction:column;
width: 100%;
background-color: lightyellow;
`

const SearchList = styled.div`
display: inline-grid;
grid-template-columns: 4% 32% 32% 32%;
justify-items: start;
border-bottom: 1px solid black;
width: 100%;
align-content: center;
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
:hover{
    cursor: pointer;
}
`

export default class PlaylistInfo extends Component {
    state = {
        nameInput: '',
        searchedMusic: [],
        searchedArtist: [],
        playlistId: ''
    }

    handleNameChange = (event) => {
        this.setState({ nameInput: event.target.value })
    }

    searchMusic = (name) => {
        axios.get(`https://api.spotify.com/v1/search?q=${name}&type=track%2Cartist&market=BR&limit=10`, {
            headers: {
                Authorization: "Bearer BQDjANi20b1r_CZsK-pCLh9MfR404bn2a0zHP7QACd_qx0IDjkGxdh6gAOaAEGmJwcDg-CoO-TiLfljKQxasxiDv7zyLWnbppXK9pSfXYRBNwqruyQ-CQ9AhyAKTcK-DQQp9vl59jSjmjDO856of9nl9-iJmXWkyViN0FEzIKbeFBhEf-gI"
            }
        }).then((response) => {
            this.setState({ searchedMusic: response.data.tracks.items })
            this.setState({ searchedArtist: response.data.artists.items })
            console.log(response.data.artists.items)
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

    render() {

        const searchedMusicList = this.state.searchedMusic.map((item) => {
            return <SearchList onClick={() => this.addToPlaylist(this.props.playlistId, item.name, item.artists.map((item) => { return item.name }), item.album.name)}>
                <ItemInfo><Image1 src={AddImg} /></ItemInfo>
                <SearchItem>{item.name}</SearchItem>
                <SearchItem>{item.artists.map((item) => { return item.name })}</SearchItem>
                <SearchItem>{item.album.name}</SearchItem>
            </SearchList>
        })

        const searchedArtistList = this.state.searchedArtist.map((item) => {
            return <SearchList>
                <ItemInfo><Image1 src={AddImg} /></ItemInfo>
                <SearchItem></SearchItem>
                <SearchItem>{item.name}</SearchItem>
                <SearchItem></SearchItem>
            </SearchList>
        })

        const playlistInfo = this.props.playlistTracks.map((item) => {
            return <ListItem>
                <ItemInfo></ItemInfo>
                <ItemInfo>{item.name}</ItemInfo>
                <ItemInfo>{item.artist}</ItemInfo>
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
                        <SubTitle>Adicionar Músicas</SubTitle>
                        <input type='text' onChange={this.handleNameChange}></input>
                        <button onClick={() => this.searchMusic(this.state.nameInput)}>Buscar</button>
                    </AddContainer>
                </BotContainer>
                <SearchContainer>
                    <ListItem>
                        <ItemInfo></ItemInfo>
                        <ItemInfo><strong>Nome</strong></ItemInfo>
                        <ItemInfo><strong>Artista</strong></ItemInfo>
                        <ItemInfo><strong>Álbum</strong></ItemInfo>
                    </ListItem>
                </SearchContainer>
                {searchedMusicList}
                {searchedArtistList}
                <ListHeader>
                    <ListItem>
                        <ItemInfo></ItemInfo>
                        <ItemInfo><strong>Título</strong></ItemInfo>
                        <ItemInfo><strong>Artista</strong></ItemInfo>
                        <ItemInfo><strong>Link</strong></ItemInfo>
                    </ListItem>
                </ListHeader>
                {playlistInfo}
            </Main>
        )
    }
}
