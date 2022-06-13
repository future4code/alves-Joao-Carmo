import styled, { css } from "styled-components";
import React, { Component } from 'react'
import Mensagem from "./Mensagem/Mensagem";

const BoxEnviarMensagem = styled.div`
    display: flex;
    flex-direction: column;
`
const BoxEnviarMensagem2 = styled.div`
    display: flex;
    height: 7vh;
    align-items: center;
`

const InputUsuario = styled.input`
    width: 15%;
    height: 70%;
    margin: 0 1%;
    border: none;
    padding-left: 8px;
    border-radius: 8px;
    box-shadow: 1px 1px 2px gray;
    background-color: #fefae0;
`
const InputMensagem = styled.input`
    width:70%;
    height: 70%;
    border: none;
    padding-left: 8px;
    border-radius: 8px;
    box-shadow: 1px 1px 2px gray;
    background-color: #fefae0;
`
const BotaoEnviar = styled.button`
    width: 9%;
    margin: 0 1%;
    padding: 1.6vh 0;
    border: none;
    border-radius: 8px;
    background-color: #d4a373;
    box-shadow: 1px 1px 2px gray;
    :hover {
        background-color: #947250;
        box-shadow: inset 0px 0px 10px 0px white;
    }
`

export default class SecaoMensagem extends Component {

    state = {
        valorUsuario: "",
        valorMensagem: "",
        mensagem: [],
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
            usuario: this.state.valorUsuario,
            mensagem: this.state.valorMensagem,
        }

        const novasMensagens = [...this.state.mensagem, novaMensagem]
        this.setState({ mensagem: novasMensagens, valorMensagem: "" })
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.aoEnviarMensagem()
        }
    }

    render() {
        const listaDeMensagens = this.state.mensagem.map((item) => {
            return (
                <Mensagem
                    usuario={item.usuario}
                    mensagem={item.mensagem}
                />
            )
        })

        return (
            <BoxEnviarMensagem>
                {listaDeMensagens}
                <BoxEnviarMensagem2>
                    <InputUsuario
                        placeholder="Usuário"
                        value={this.state.valorUsuario}
                        onChange={this.onChangeUsuario}
                    />
                    <InputMensagem
                        onKeyPress={this.handleKeyPress}
                        placeholder="Mensagem"
                        value={this.state.valorMensagem}
                        onChange={this.onChangeMensagem}
                    />
                    <BotaoEnviar type='submit' onClick={this.aoEnviarMensagem}>Enviar</BotaoEnviar>
                </BoxEnviarMensagem2>
            </BoxEnviarMensagem>
        )
    }
}
