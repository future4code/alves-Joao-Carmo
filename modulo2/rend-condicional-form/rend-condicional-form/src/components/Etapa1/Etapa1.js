import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PerguntaAberta from '../PerguntaAberta/PerguntaAberta';
import PerguntaOpcoes from '../PerguntaOpcoes/PerguntaOpcoes';


const Main = styled.div`
    flex-direction: column;
    align-items: center;
    ${({ active }) => {
        return css`
            display: ${active ? 'flex' : 'none'};
        `;
    }}
`
export default class Etapa1 extends Component {
    state = {
        pergunta1Completa: false,
        pergunta2Completa: false,
        pergunta3Completa: false,
    }

    handleChangePergunta1 = (input) => {
        if (input != '') {
            this.setState({ pergunta1Completa: true })
        } else {
            this.setState({ pergunta1Completa: false })
        }
        if (this.state.pergunta1Completa && this.state.pergunta2Completa && this.state.pergunta3Completa) {
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
        if (this.state.pergunta1Completa && this.state.pergunta2Completa && this.state.pergunta3Completa) {
            this.props.handlePaginaCompletaChange(true)
        } else {
            this.props.handlePaginaCompletaChange(false)
        }
    }

    handleChangePergunta3 = (input) => {
        if (input != '') {
            this.setState({ pergunta3Completa: true })
        } else {
            this.setState({ pergunta3Completa: false })
        }
        if (this.state.pergunta1Completa && this.state.pergunta2Completa && this.state.pergunta3Completa) {
            this.props.handlePaginaCompletaChange(true)
        } else {
            this.props.handlePaginaCompletaChange(false)
        }
    }

    opcaoEscolhida = (opcao) => {
        this.props.opcaoEscolhida(opcao)
    }

    render() {
        return (
            <Main active={this.props.active}>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <PerguntaAberta pergunta={"1. Qual o seu nome?"} onChange={this.handleChangePergunta1} />
                <PerguntaAberta pergunta={"2. Qual sua idade?"} onChange={this.handleChangePergunta2} />
                <PerguntaAberta pergunta={"3. Qual seu email?"} onChange={this.handleChangePergunta3} />
                <PerguntaOpcoes
                    opcaoEscolhida={this.opcaoEscolhida}
                    pergunta={"4. Qual a sua escolaridade?"}
                    opcoes={[
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo"
                    ]}
                />
            </Main>

        )
    }
}
