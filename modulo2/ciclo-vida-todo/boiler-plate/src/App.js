import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  margin-bottom: 16px;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
const BotaoApagar = styled.button`
`
class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(), 
        texto: 'Cleaning',
        completa: false,
      },
      {
        id: 0, 
        texto: 'Homework',
        completa: false,
      }

    ],
    inputValue: '',
    filtro: '',
    display: true
  }

  componentDidUpdate() {
    localStorage.setItem("listaTarefas", JSON.stringify(this.state.tarefas))
  }

  componentDidMount() {
    this.getData()
  };

  getData = () => {
    let lista = localStorage.getItem("listaTarefas");
    const tarefas = JSON.parse(lista);
    this.setState({tarefas: tarefas})
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const NovaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novasTarefas = [...this.state.tarefas, NovaTarefa]
    this.setState({ tarefas: novasTarefas, inputValue: '' })
  }

  selectTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaTarefa = { ...tarefa, completa: !tarefa.completa }
        return novaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: novaListaTarefas })
  }

  deleteTarefa = (id) => {
    const novasTarefas = this.state.tarefas.filter((tarefa) => {
      return id !== tarefa.id
    })
    this.setState({tarefas: novasTarefas})
  }

  deleteAll = () => {
    const listaZerada = []
    this.setState({tarefas: listaZerada})
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          
          {listaFiltrada.map(tarefa => {
           return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onDoubleClick={() => this.deleteTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
              
            ) 
          })}
          
        </TarefaList>
        <BotaoApagar onClick={this.deleteAll}>Apagar Todas</BotaoApagar>
      </div>
    )
  }
}

export default App
