import React, { Component } from 'react'
import styled, {css} from 'styled-components'
import PerguntaAberta from '../PerguntaAberta/PerguntaAberta';
import PerguntaOpcoes from '../PerguntaOpcoes/PerguntaOpcoes';

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${({ active }) => {
        return css`
            display: ${active ? 'flex' : 'none'};
        `;
    }}
`

export default class Etapa3 extends Component { 
    state = {
        pergunta1Completa: false
    }

    handleChangePergunta1 = (input) => {
        if (input != '') {
            this.setState({ pergunta1Completa: true })
        } else {
            this.setState({ pergunta1Completa: false })
        }
        if (this.state.pergunta1Completa) {
            this.props.handlePaginaCompletaChange(true)
        } else {
            this.props.handlePaginaCompletaChange(false)
        }
    }

    render() {
        return (
            <Main active={this.props.active}>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <PerguntaAberta pergunta={"7. Por que você não terminou um curso de graduação?"} errorMessage={'Justifique'} onChange={this.handleChangePergunta1} showError={this.props.showError}></PerguntaAberta>
                <PerguntaOpcoes 
                    pergunta={"8. Você fez algum curso complementar?"}
                    opcoes={[
                        "Nenhum",
                        "Curso técnico",
                        "Curso de inglês"
                    ]}
                />
            </Main>
        )
    }
}
