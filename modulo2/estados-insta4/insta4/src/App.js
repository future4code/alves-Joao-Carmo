import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 268px;
  padding: 16px;
  gap: 14px;
  margin-bottom: 8px;

`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "joao",
        fotoUsuario: "https://picsum.photos/id/1/50/50",
        fotoPost: "https://picsum.photos/id/0/200/150",
      },
      {
        nomeUsuario: "raphael",
        fotoUsuario: "https://picsum.photos/id/1001/50/50",
        fotoPost: "https://picsum.photos/id/10/200/150",
      },
    ],
    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  }
 
  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novoPosts = [...this.state.posts, novoPost]
    this.setState({ posts: novoPosts, valorInputUsuario: "", valorInputFotoUsuario: "", valorInputFotoPost: ""})
  }

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value})
  }
  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value})
  }
  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value})
  }

  render() {

    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })

    return (
      <div>
        <MainContainer>
        <FormContainer>
          <input 
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"} 
          />
          <input 
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto de Usuário"} 
          />
          <input 
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto do Post"} 
          />
          <button onClick={this.adicionaPost}>Novo Post</button>
        </FormContainer>
        
          {listaDePosts}
        </MainContainer>
      </div>
    );
  }
}

export default App;
