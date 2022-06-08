import React, { Component } from 'react'
import styled from 'styled-components'

import iconeInsta from '../../img/instagram.svg'
import iconeFace from '../../img/facebook.svg'
import iconeTwitter from '../../img/twitter.svg'

let ShareContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 8px;
    border-top: 1px solid black;
    gap: 16px;
`
const IconeRedes = styled.img`
    display: flex;
    width: 24px;
`

const RedesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`
const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export class SecaoCompartilhar extends Component {
    state = {
        valorComentario: ''
    }

    onChangeComentario = (event) => {
        console.log(event.target.value)
        this.setState({ valorComentario: event.target.value })
    }

    aoCompartilharInsta = () => {
        console.log('Post compartilhado no Instagram com a mensagem: ' + this.state.valorComentario)
        this.setState({ valorComentario: ''})
    }

    aoCompartilharTwitter = () => {
        console.log('Post compartilhado no Twitter com a mensagem: ' + this.state.valorComentario)
        this.setState({ valorComentario: ''})
    }

    aoCompartilharFace = () => {
        console.log('Post compartilhado no Facebook com a mensagem: ' + this.state.valorComentario)
        this.setState({ valorComentario: ''})
    }

    render() {
        return <ShareContainer>
            <RedesContainer>
                <IconeRedes src={iconeInsta} onClick={this.aoCompartilharInsta}/>
                <IconeRedes src={iconeTwitter} onClick={this.aoCompartilharTwitter} />
                <IconeRedes src={iconeFace} onClick={this.aoCompartilharFace} />
            </RedesContainer>
            <InputContainer>
                <InputComentario
                    placeholder={'Comentário'}
                    value={this.state.valorComentario}
                    onChange={this.onChangeComentario}
                />
            </InputContainer>
        </ShareContainer>
    }
}



