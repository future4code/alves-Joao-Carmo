import React, { Component } from 'react'
import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default class PerguntaOpcoes extends Component {
  render() {
    return (
      <Main>
        <p>{this.props.pergunta}</p>
        <select>
          {this.props.opcoes.map(function (item) {
            return <option value={item}>{item}</option>
          })}
        </select>

      </Main>
    )
  }
}
