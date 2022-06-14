import styled, { css } from "styled-components";
import React, { Component } from 'react'


const MainContainer = styled.div`
    flex-direction: column;
    word-break: break-all;
    word-wrap: break-word;
    align-self: flex-start;
    border-radius: 16px;
    padding: 16px;
    padding-top: 0;
    max-width: 40%;
    background-color: #fefae0;
    margin: 0.5vh 2vw;
    box-shadow: 1px 1px 2px gray;
    ${({ display }) => {
        return css`
            display: ${display ? 'flex' : 'none'};
        `;
    }}
`

const MainContainer2 = styled.div`
    flex-direction: column;
    word-break: break-all;
    word-wrap: break-word;
    align-self: flex-end;
    border-radius: 16px;
    padding: 16px;
    max-width: 40%;
    background-color: lightgreen;
    margin: 0.5vh 2vw;
    box-shadow: 1px 1px 2px gray;
    ${({ display }) => {
        return css`
            display: ${display ? 'flex' : 'none'};
        `;
    }}
`

const UsuarioContainer = styled.p`
    margin-bottom: 2%;
    font-weight: bold;
`


export default class Mensagem extends Component {
    state = {
        display: true
    }

    handleDoubleClick = () => {
        this.setState({ display: false })
        console.log(this.state.display)
    }

    render() {
        if (this.props.usuario === 'eu') {
            return (
                <MainContainer2 onDoubleClick={this.handleDoubleClick} display={this.state.display}>
                    {this.props.mensagem}
                </MainContainer2>
            )
        } else {
            return (
                <MainContainer onDoubleClick={this.handleDoubleClick} display={this.state.display}>
                    <UsuarioContainer>{this.props.usuario}</UsuarioContainer>
                    {this.props.mensagem}
                </MainContainer>
            )
        }
    }
}
