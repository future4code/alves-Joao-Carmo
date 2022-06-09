import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSalvarPreto from '../../img/bookmark.svg'
import iconeSalvarBranco from '../../img/bookmark-regular.svg'
import iconeCompartilhar from '../../img/compartilhar.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhando: false,
  }

  onClickCurtida = () => {

    this.setState({
      curtido: !this.state.curtido,
    })
    
    if (this.state.curtido == 0) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
      console.log("Curtiu")
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
      console.log("Descurtiu")
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickSalvar = () => {
    this.setState({
      salvo: !this.state.salvo
    })
  }

  onClickCompatilhar = () => {
    this.setState ({
      compartilhando: !this.state.compartilhando
    })
  }

  render() {
    let iconeCurtida
    let iconeSalvar

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if(this.state.salvo) {
      iconeSalvar = iconeSalvarPreto
    } else {
      iconeSalvar = iconeSalvarBranco
    }

    let componenteComentario
    let componenteCompartilhar

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }


    if(this.state.compartilhando) {
      componenteCompartilhar = <SecaoCompartilhar/>
    }


    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeSemContador
          icone={iconeSalvar}
          onClickIcone={this.onClickSalvar}
        />

        <IconeSemContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompatilhar}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  }
}

export default Post