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

    opcaoEscolhida = (opcao) => {
        this.props.opcaoEscolhida(opcao)
    }

    render() {
        return (
            <Main active={this.props.active}>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
                <PerguntaAberta pergunta={"2. Qual sua idade?"} />
                <PerguntaAberta pergunta={"3. Qual seu email?"} />
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
