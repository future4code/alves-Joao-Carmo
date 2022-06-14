import React, { Component } from 'react'
import styled, {css}  from 'styled-components'
import PerguntaAberta from '../PerguntaAberta/PerguntaAberta';

const Main = styled.div`
    flex-direction: column;
    align-items: center;
    ${({ active }) => {
        return css`
            display: ${active ? 'flex' : 'none'};
        `;
    }}
`

export default class Etapa2 extends Component {
    state = {
        pergunta1Completa: false,
        pergunta2Completa: false
    }

    handleChangePergunta1 = (input) => {
        if (input != '') {
            this.setState({ pergunta1Completa: true })
        } else {
            this.setState({ pergunta1Completa: false })
        }
        if (this.state.pergunta1Completa && this.state.pergunta2Completa) {
            this.props.handlePaginaCompletaChange(true)
        } else {
            this.props.handlePaginaCompletaChange(false)
        }
    }

    handleChangePergunta2 = (input) => {
        if (input != '') {
            this.setState({ pergunta2Completa: true })
        } else {
            this.setState({ pergunta2Completa: false })
        }
        if (this.state.pergunta1Completa && this.state.pergunta2Completa) {
            this.props.handlePaginaCompletaChange(true)
        } else {
            this.props.handlePaginaCompletaChange(false)
        }
    }

    render() {
        return (
            <Main active={this.props.active}>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <PerguntaAberta pergunta={"5. Qual curso?"} onChange={this.handleChangePergunta1}></PerguntaAberta>
                <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} onChange={this.handleChangePergunta2}></PerguntaAberta>
            </Main>
        )
    }
}
