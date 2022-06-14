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
    render() {
        return (
            <Main active={this.props.active}>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <PerguntaAberta pergunta={"5. Qual curso?"}></PerguntaAberta>
                <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"}></PerguntaAberta>
            </Main>
        )
    }
}
