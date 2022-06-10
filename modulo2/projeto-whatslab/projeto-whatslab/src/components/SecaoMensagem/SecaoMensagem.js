
import styled from "styled-components";

import React, { Component } from 'react'

const BoxEnviarMensagem = styled.div`
    display: flex;
    flex-direction: column;
`
const BoxEnviarMensagem2 = styled.div`
    display: flex;
    height: 5vh;
    box-shadow: 0px -2px 10px grey;
    align-items: center;
`

const BoxMensagem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 10%;
`
const InputUsuario = styled.input`
    width: 15%;
    height: 50%;
    margin: 0 1%;

`
const InputMensagem = styled.input`
    width:70%;
    height: 50%;
`
const BotaoEnviar = styled.button`
    width: 9%;
    margin: 0 1%;
    padding: 0.5vh 0;
`

const MiniBoxMensagem = styled.div`
    display:flex;
    gap: 2%;
    align-items: flex-end;
    background-color: lightblue;
    padding: 8px;
    border-radius: 16px;
`

export default class SecaoMensagem extends Component {
    state = {
        valorUsuario: "",
        valorMensagem: "",
        listaMensagem: [
            {
                usuario: "",
                mensagem: ""
            }
        ],
        existe: false
    }

    onChangeUsuario = (event) => {
        this.setState({ valorUsuario: event.target.value })
    }

    onChangeMensagem = (event) => {
        this.setState({ valorMensagem: event.target.value })
    }

    aoEnviarMensagem = () => {
        if (this.state.valorMensagem === "") {
            return
        }
        const novaMensagem = {
            usuario: this.state.valorUsuario + ":",
            mensagem: this.state.valorMensagem,
        }

        const novasMensagens = [...this.state.listaMensagem, novaMensagem]
        this.setState({ listaMensagem: novasMensagens, valorMensagem: "", existe: true})
    }

    render() {


        const listaDeMensagens = this.state.listaMensagem.map((item) => {
            if (this.state.existe == true){
                return (
                    <MiniBoxMensagem>
                        <p><strong>{item.usuario}</strong></p>
                        <p>{item.mensagem}</p>
                    </MiniBoxMensagem>
                )
            }
            
        })



        return (
            <BoxEnviarMensagem>
                <BoxMensagem>
                    {listaDeMensagens}
                </BoxMensagem>
                <BoxEnviarMensagem2>
                    <InputUsuario
                        placeholder="Usuário"
                        value={this.state.valorUsuario}
                        onChange={this.onChangeUsuario}
                    />
                    <InputMensagem
                        placeholder="Mensagem"
                        value={this.state.valorMensagem}
                        onChange={this.onChangeMensagem}
                    />
                    <BotaoEnviar type='submit' onClick={this.aoEnviarMensagem} onKeyDown={this.aoEnviarMensagem}>Enviar</BotaoEnviar>
                </BoxEnviarMensagem2>
            </BoxEnviarMensagem>
        )
    }
}
