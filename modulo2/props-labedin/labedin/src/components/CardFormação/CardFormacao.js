import React from 'react';
import {BigCardContainer} from './styled.js'
import {ImageBigCard} from './styled.js'
import {Nome} from './styled.js'
import {DivBigCardContainer} from './styled.js'

function CardFormacao(props) {
    return (
        <BigCardContainer>
            <ImageBigCard src={props.imagem}/>
            <DivBigCardContainer>
                <Nome>{ props.titulo }</Nome>
                <p>{ props.curso }</p>
                <p>{ props.periodo }</p>
            </DivBigCardContainer>
        </BigCardContainer>
    )
}

export default CardFormacao;