import React, { Component } from 'react'
import styled from 'styled-components'
import Post from '../Post/Post'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
	flex-direction: column;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
	padding: 8px;
`

const CommentContainer2 = styled.div`
	display: flex;
	flex-direction: column;
`

const Titulo = styled.h3`
	text-align: center;
`

const CaixaComentario = styled.div`
	margin: 8px;
	border: 1px solid black;
	padding: 8px;
`

const InputContainer = styled.div`
	display: flex;
`
export class SecaoComentario extends Component {
	state = {
		valorComentario: '',
		listaComentario: [
			{
				texto: "",
			}
		],
		numeroComentarios: 0
	}

	onChangeComentario = (event) => {
		console.log(event.target.value)
		this.setState({ valorComentario: event.target.value })
	}

	aoEnviarComentario = () => {
		const novoComentario = {
			texto: this.state.valorComentario,
		  }

		const novosComentarios = [...this.state.listaComentario, novoComentario]
		this.setState({ listaComentario: novosComentarios, valorComentario: "", comentando: true, numeroComentarios: numeroComentarios+1})
		console.log(this.listaComentario)
	}

	render() {

		const listaDeComentarios = this.state.listaComentario.map((comment) => {
			return (
			  <p>{comment.texto}</p>
			)
		  })


		return <CommentContainer>
			<InputContainer>
				<InputComentario
					placeholder={'Comentário'}
					value={this.state.valorComentario}
					onChange={this.onChangeComentario}
				/>
				<button onClick={this.aoEnviarComentario}>Enviar</button>
			</InputContainer>

			<CommentContainer2>
				<Titulo>Comentários</Titulo>
				<CaixaComentario>{listaDeComentarios}</CaixaComentario>
			</CommentContainer2>
		</CommentContainer>
	}
}
