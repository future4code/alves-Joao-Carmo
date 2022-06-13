import React, { Component } from 'react'
import styled, {css} from 'styled-components'

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
                <h3>O FORMULÁRIO ACABOU</h3>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </Main>
        )
    }
}

