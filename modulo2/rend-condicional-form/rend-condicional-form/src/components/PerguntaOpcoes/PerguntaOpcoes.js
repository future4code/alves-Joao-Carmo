import React, { Component } from 'react'
import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default class PerguntaOpcoes extends Component {  

  handleChange = (event) => {
    this.props.opcaoEscolhida(event.target.value)
  };

  render() {
    
    return (
      <Main>
        <p>{this.props.pergunta}</p>
        <select onChange={this.handleChange}>
          {this.props.opcoes.map(function (item) {
            return <option value={item} key={item}>{item}</option>
          })}
        </select>

      </Main>
    )
  }
}
