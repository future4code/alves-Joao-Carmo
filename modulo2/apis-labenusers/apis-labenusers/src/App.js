import styled, { css } from 'styled-components';
import axios from 'axios';
import React, { Component } from 'react'

const Main = styled.div`
display: flex;
flex-direction: column;
padding: 32px;
`
const ViewBtn = styled.button`
width: 10%;
`

const FormDiv = styled.div`
display: flex;
margin-top: 3vh;
${({ display }) => {
    return css`
            display: ${display ? 'flex' : 'none'};
        `;
  }}
`

const UsersDiv = styled.div`
display: flex;
flex-direction: column;
margin-top: 3vh;
${({ display }) => {
    return css`
            display: ${display ? 'none' : 'flex'};
        `;
  }}
`

const UsersList = styled.div`
display: flex;
align-items: center;
gap: 1%;
`

const RemoveBtn = styled.button`
width: 5%;
height: 3vh;
`

export default class App extends Component {
  state = {
    nameInput: "",
    emailInput: "",
    view: true,
    users: []
  }

  componentDidMount = () => {
    this.getUsers()
  }

  getUsers = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: 'joao-colodetti-alves'
      }
    }).then((response) => {
      this.setState({ users: response.data })
    }).catch((error) => {
      console.log(error)
    })
  }

  handleNameChange = (event) => {
    this.setState({ nameInput: event.target.value })
  }

  handleEmailChange = (event) => {
    this.setState({ emailInput: event.target.value })
  }

  createUser = () => {
    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: 'joao-colodetti-alves'
      }
    }).then(() => {
      alert('Usuário criado com sucesso')
    }).catch(() => {
      alert('Usuário ou e-mail inválidos')
    })

  }

  changeView = () => {
    this.setState({ view: !this.state.view })
    this.getUsers()
  }

  deleteUser = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
        Authorization: 'joao-colodetti-alves'
      }
    }).then(() => {
      alert('Usuário deletado com sucesso')
    }).then(() => {
      this.getUsers()
    }).catch(() => {
      alert('Não foi possível deletar o usuário')
    })
    
  }

  render() {

    const renderedUsers = this.state.users.map((user) => {
      return <UsersList>
        <p>{user.name}</p>
        <RemoveBtn onClick={() => this.deleteUser(user.id)}>Remove</RemoveBtn>
      </UsersList>
    })


    return (
      <Main>
        <ViewBtn onClick={this.changeView}>Trocar de Tela</ViewBtn>
        <FormDiv display={this.state.view}>
          <input placeholder='Nome' onChange={this.handleNameChange}></input>
          <input placeholder='E-mail' onChange={this.handleEmailChange}></input>
          <button onClick={this.createUser}>Criar Usuário</button>
        </FormDiv>
        <UsersDiv display={this.state.view}>
          {renderedUsers}
        </UsersDiv>

      </Main>
    )
  }
}

