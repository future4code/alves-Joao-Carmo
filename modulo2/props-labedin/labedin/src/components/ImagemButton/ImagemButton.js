import React from 'react';
import {ImageButtonContainer} from './styled.js'
import {ImageButton} from './styled.js'

function ImagemButton(props) {
    return (
        <ImageButtonContainer>
            <ImageButton src={props.imagem}/>
            <p>{ props.texto }</p>
        </ImageButtonContainer>

    )
}

export default ImagemButton;