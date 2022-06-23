import styled, { css } from 'styled-components';
import axios, { AxiosError } from 'axios';
import React, { Component } from 'react'
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import SwitchComponents from './SwitchComponents/SwitchComponents';

const Main = styled.div`
display: flex;
flex-direction: column;
padding: 32px;
`
const ViewBtn = styled.button`
width: 12%;
padding: 8px;
font-size: 1.3rem;
align-self: center;
border-radius: 8px;
cursor: pointer;
:hover {
  background-color: black;
  color: white;
  box-shadow: 1px 1px 7px black;
}
`

const FormDiv = styled.div`
height: 20vh;
width: 15vw;
align-items: center;
justify-content: center;
display: flex;
margin-top: 15%;
align-self: center;
border: 2px solid black;
flex-direction: column;
padding: 16px;
border-radius: 24px;
`

const UsersDiv = styled.div`
display: flex;
flex-direction: column;
margin-top: 5%;
align-self: center;
align-content: center;
`

const UsersList = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid black;
border-radius: 16px;
padding: 16px;
margin: 0.5vh 0;
`

const UsersList2 = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid black;
border-radius: 16px;
padding: 16px;
margin: 0.5vh 0;

`

const SearchDiv = styled.div`
display: flex;
margin-bottom: 5vh;
padding: 16px;
gap: 10%;
`

const Btn = styled.button`
width: 5vw;
height: 3vh;
border-radius: 16px;
cursor: pointer;
font-weight: bold;
:hover {
  background-color: black;
  color: white;
  box-shadow: 1px 1px 7px black;
}
`
const RemoveBtn = styled.button`
width: 5vw;
height: 3vh;
border-radius: 16px;
cursor: pointer;
font-weight: bold;
:hover {
  background-color: black;
  color: red;
  box-shadow: 1px 1px 7px black;
}
`

const UserInfoDiv = styled.div`
height: 25vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
border: 2px solid black;
width: 30%;
padding: 24px;
align-self: center;
margin-top: 15%;
border-radius: 24px;
`

const EditInfo = styled.div`
height: 25vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
border: 2px solid black;
width: 30%;
padding: 24px;
align-self: center;
margin-top: 15%;
border-radius: 24px;
`
const LabelDiv = styled.div`
margin: 1vh 0;
font-weight: bold;
`

const CreateBtn = styled.button`
font-size: 1.2rem;
padding: 8px;
margin: 1vh 0;
border-radius: 16px;
cursor: pointer;
:hover {
  background-color: black;
  color: white;
  box-shadow: 1px 1px 7px black;
}`

export default class App extends Component {
  state = {
    nameInput: "",
    emailInput: "",
    display: true,
    users: [],
    userInfoView: false,
    userInfo: [],
    activeComponent: 'form',
    editNameInput: '',
    editEmailInput: '',
    searchName: '',
    usersSearched: []
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

  editName = (event) => {
    this.setState({ editNameInput: event.target.value })
  }

  editEmail = (event) => {
    this.setState({ editEmailInput: event.target.value })
  }

  handleSearchName = (event) => {
    this.setState({ searchName: event.target.value })
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

  changeDisplay = () => {
    if (this.state.activeComponent == 'form') {
      this.setState({ activeComponent: 'user-list' })
    } else if (this.state.activeComponent == 'user-list') {
      this.setState({ activeComponent: 'form' })
    }

    this.getUsers()
  }

  deleteUser = (id) => {
    if (window.confirm("Tem certeza de que deseja deletar?")) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
        headers: {
          Authorization: 'joao-colodetti-alves'
        }
      }).then(() => {
        alert('Usuário deletado com sucesso')
      }).then(() => {
        this.getUsers()
      }).then(() => {
        this.setState({ activeComponent: 'user-list' })
      }).catch(() => {
        alert('Não foi possível deletar o usuário')
      })
    }

  }

  userInfoDisplay = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
        Authorization: 'joao-colodetti-alves'
      }
    }).then((response) => {
      this.setState({ userInfo: response.data })
      this.setState({ activeComponent: 'user-info' })
    })
  }

  handleClick = () => {
    this.setState({ activeComponent: 'edit' })
  }

  editUser = (id) => {
    const body = {
      name: this.state.editNameInput,
      email: this.state.editEmailInput
    }

    if (window.confirm("Tem certeza que deseja salvar ?")) {
      axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, body, {
        headers: {
          Authorization: 'joao-colodetti-alves'
        }
      }).then(() => {
        alert('Informações alteradas com sucesso')
      }).then(() => {
        this.setState({ activeComponent: 'user-info' })
      }).catch(() => {
        alert('Não foi possível alterar as informações')
      })
    }

  }

  searchUser = (name) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${name}`, {
      headers: {
        Authorization: 'joao-colodetti-alves'
      }
    }).then((response) => {
      this.setState({ usersSearched: response.data })
    })
  }

  goBack = () => {
    if (this.state.activeComponent == 'user-info') {
      this.setState({ activeComponent: 'user-list' })
    } else if (this.state.activeComponent == 'edit') {
      this.setState({ activeComponent: 'user-info' })
    }
  }

  render() {

    const renderedUsers = this.state.users.map((user) => {
      return <UsersList>
        <p onClick={() => this.userInfoDisplay(user.id)}>{user.name}</p>
        <RemoveBtn onClick={() => this.deleteUser(user.id)}>Remove</RemoveBtn>
      </UsersList>
    })

    const usersSearchedList = this.state.usersSearched.map((user) => {
      return <UsersList2>
        <p>Nome: {user.name}</p>
        <p>Id: {user.id}</p>
      </UsersList2>
    })
    return (
      <Main>
        <ViewBtn onClick={this.changeDisplay}>Trocar de Tela</ViewBtn>
        <SwitchComponents active={this.state.activeComponent}>
          <FormDiv name='form'>
            <LabelDiv>
              <label forhtml='name'>Nome:</label>
              <input required id='name' name='name' type='text' onChange={this.handleNameChange}></input>
            </LabelDiv>
            <LabelDiv>
              <label forhtml='email'>E-mail:</label>
              <input required id='email' name='email' type='email' onChange={this.handleEmailChange}></input>
            </LabelDiv>
            <CreateBtn onClick={this.createUser}>Criar Usuário</CreateBtn>
          </FormDiv>
          <UsersDiv name='user-list'>
            {usersSearchedList}
            <SearchDiv>
              <input placeholder='Nome' onChange={this.handleSearchName}></input>
              <Btn onClick={() => this.searchUser(this.state.searchName)}>Buscar</Btn>
            </SearchDiv>
            {renderedUsers}
          </UsersDiv>
          <UserInfoDiv name='user-info'>
            {this.state.userInfo && <>
              <p>Nome: {this.state.userInfo.name}</p>
              <p>Email: {this.state.userInfo.email}</p>
              <RemoveBtn onClick={() => this.deleteUser(this.state.userInfo.id)}>Remover</RemoveBtn>
              <Btn onClick={this.handleClick}>Editar</Btn>
              <Btn onClick={this.goBack}>Voltar</Btn>
            </>}
          </UserInfoDiv>
          <EditInfo name='edit'>
            <input placeholder='Nome' onChange={this.editName}></input>
            <input placeholder='E-mail' onChange={this.editEmail}></input>
            <Btn onClick={() => this.editUser(this.state.userInfo.id)}>Salvar</Btn>
            <Btn onClick={this.goBack}>Voltar</Btn>
          </EditInfo>
        </SwitchComponents>

      </Main>
    )
  }
}

