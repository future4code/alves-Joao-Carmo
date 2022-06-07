import React from 'react';
import {SmallCardContainer} from "./styled.js"
import {Image} from "./styled.js"
import {Titulo} from "./styled.js"

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <Image src={props.imagem}/>
            <Titulo>{props.titulo}</Titulo>
            <p>{props.info}</p>
        </SmallCardContainer>
    )
}

export default CardPequeno;