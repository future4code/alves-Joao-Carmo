import React from 'react'
import styled from 'styled-components'

const ImagemMatch = styled.img`
width: 3vw;
height: 7vh;
`

const Container = styled.div`
display:flex;
border-bottom: 1px solid black;
padding: 20px;
gap: 3%;
align-items: center;
`
export default function Matches({ matches }) {

    const listaMatches = matches.map((item => {
        return <Container>
            <ImagemMatch src={item.photo} alt={item.photo_alt} />
            <p>{item.name}</p>
        </Container>


    }))
    return (
        <div>
            {listaMatches}
        </div>
    )
}
