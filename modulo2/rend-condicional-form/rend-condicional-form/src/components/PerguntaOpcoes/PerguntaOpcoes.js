import React, { Component } from 'react'
import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default class PerguntaOpcoes extends Component {  
  state = {
    value: 'Ensino médio incompleto',
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value});
    this.props.opcaoEscolhida(this.state.value)
  };

  

  
  
  render() {
    
    return (
      <Main>
        <p>{this.props.pergunta}</p>
        <select value={this.state.value} onChange={this.handleChange}>
          {this.props.opcoes.map(function (item) {
            return <option value={item}>{item}</option>
          })}
        </select>

      </Main>
    )
  }
}
