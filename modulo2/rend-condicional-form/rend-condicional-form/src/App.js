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
    opcaoEtapa1: '',
  }

  handleOnClick = () => {
    if (this.state.opcaoEtapa1 === 'Ensino médio incompleto' || this.state.opcaoEtapa1 === 'Ensino médio completo') {
      this.setState({ indice: this.state.indice + 2 })
    } else {
      this.setState({ indice: this.state.indice + 1 })
    }
    if (this.state.indice == 2) {
      this.setState({ indice: 4 })
    }
  }

  opcaoEscolhida = (opcao) => {
    this.setState({ opcaoEtapa1: opcao })
  }

  render() {

    return (
      <Main>
        <Etapa1 active={this.state.indice == 1} opcaoEscolhida={this.opcaoEscolhida}></Etapa1>
        <Etapa2 active={this.state.indice == 2}></Etapa2>
        <Etapa3 active={this.state.indice == 3}></Etapa3>
        <EtapaFinal active={this.state.indice == 4 || this.state.indice == 5}></EtapaFinal>
        <Btn active={this.state.indice != 4 && this.state.indice != 5} onClick={this.handleOnClick}>Próxima Etapa</Btn>
      </Main>
    );
  }

}

export default App;
