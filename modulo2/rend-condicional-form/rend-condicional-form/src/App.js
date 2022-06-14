import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1/Etapa1';
import Etapa2 from './components/Etapa2/Etapa2';
import Etapa3 from './components/Etapa3/Etapa3';
import EtapaFinal from './components/EtapaFinal/EtapaFinal';
import styled, { css } from 'styled-components';
import PerguntaOpcoes from './components/PerguntaOpcoes/PerguntaOpcoes';

const Btn = styled.button`
  display: flex;
  align-items: center;
  margin-top: 3vh;
  ${({ active }) => {
    return css`
            display: ${active ? 'flex' : 'none'};
        `;
  }}
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`


class App extends React.Component {
  state = {
    indice: 1,
    possuiSuperior: false,
    paginaCompleta: false
  }

  handleOnClick = () => {
    if (!this.state.paginaCompleta){
      alert("Responda todas as perguntas")
      return
    }
    console.log(this.state.possuiSuperior)
    if (!this.state.possuiSuperior) {
      this.setState({ indice: this.state.indice + 2 })
      this.setState({possuiSuperior: true})
    } else {
      this.setState({ indice: this.state.indice + 1 })
      this.setState({possuiSuperior: false})
    }
    this.setState({paginaCompleta: false})
  }

  opcaoEscolhida = (opcao) => {
    console.log(opcao)
    if (opcao.includes('superior')){
      this.setState({possuiSuperior: true})
    }
  }

  handlePaginaCompletaChange = (isComplete) => {
    this.setState({paginaCompleta: isComplete})
  }

  render() {

    return (
      <Main>
        <Etapa1 active={this.state.indice == 1} opcaoEscolhida={this.opcaoEscolhida} handlePaginaCompletaChange={this.handlePaginaCompletaChange}></Etapa1>
        <Etapa2 active={this.state.indice == 2} handlePaginaCompletaChange={this.handlePaginaCompletaChange}></Etapa2>
        <Etapa3 active={this.state.indice == 3} handlePaginaCompletaChange={this.handlePaginaCompletaChange}></Etapa3>
        <EtapaFinal active={this.state.indice == 4}></EtapaFinal>
        <Btn active={this.state.indice != 4} onClick={this.handleOnClick}>Próxima Etapa</Btn>
      </Main>
    );
  }

}

export default App;
