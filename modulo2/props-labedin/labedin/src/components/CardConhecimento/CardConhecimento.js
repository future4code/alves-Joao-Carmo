import React from 'react';
import {BigCardContainer, ItemMenu} from './styled.js'

function CardConhecimento(props) {
    return (
        <BigCardContainer>
                <ul>
                    <ItemMenu>{props.texto1}</ItemMenu>
                    <ItemMenu>{props.texto2}</ItemMenu>
                    <ItemMenu>{props.texto3}</ItemMenu>
                    <ItemMenu>{props.texto4}</ItemMenu>
                    <ItemMenu>{props.texto5}</ItemMenu>
                    <ItemMenu>{props.texto6}</ItemMenu>
                    <ItemMenu>{props.texto7}</ItemMenu>
                </ul>
        </BigCardContainer>
    )
}

export default CardConhecimento;