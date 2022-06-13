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
    render() {
        return (
            <Main active={this.props.active}>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <PerguntaAberta pergunta={"7. Por que você não terminou um curso de graduação?"}></PerguntaAberta>
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
