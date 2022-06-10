import React from 'react';
import {BigCardContainer} from './styled.js'
import {ImageBigCard} from './styled.js'
import {Nome} from './styled.js'
import {DivBigCardContainer} from './styled.js'

function CardGrande(props) {
    return (
        <BigCardContainer>
            <ImageBigCard src={props.imagem}/>
            <DivBigCardContainer>
                <Nome>{ props.nome }</Nome>
                <p>{ props.descricao }</p>
            </DivBigCardContainer>
        </BigCardContainer>
    )
}

export default CardGrande;