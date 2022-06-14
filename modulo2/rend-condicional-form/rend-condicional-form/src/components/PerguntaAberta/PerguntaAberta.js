import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default class PerguntaAberta extends Component {

    render() {
        return (
            <Main>
                <p>{this.props.pergunta}</p>
                <input onChange={this.props.onChange}></input>
            </Main>
        )
    }
}
