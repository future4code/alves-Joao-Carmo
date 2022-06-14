import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Erro = styled.p`
    /* display: flex; */
    color: red;
    ${({ active }) => {
        return css`
            display: ${active ? 'flex' : 'none'};
        `;
    }}
`

export default class PerguntaAberta extends Component {
    state = {
        isEmpty: true,
        errorMessage: 'Preencha o campo'
    }
    
    handleChange = (input) => {
        this.props.onChange(input.target.value)
        console.log(input)
        if (input.target.value === ''){
            console.log('ta vazio')
            this.setState({isEmpty: true})
        } else {
            console.log('nao ta vazio')
            this.setState({isEmpty: false})
        }
    }

    render() {
        return (
            <Main>
                <p>{this.props.pergunta}</p>
                <input onChange={this.handleChange}></input>
                <Erro active={this.props.showError && this.state.isEmpty}>{this.props.errorMessage ? this.props.errorMessage : this.state.errorMessage}</Erro>
            </Main>
        )
    }
}
