import React from "react";
import styled from 'styled-components';
import SecaoMensagem from "./components/SecaoMensagem/SecaoMensagem";
import Conversa from "./components/SecaoMensagem/Conversa/Conversa";
import Mensagem from "./components/SecaoMensagem/Mensagem/Mensagem";

const MainContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100vh;
`

const ChatBox = styled.div`
  width: 40vw;
  height: 100vh;
  border: 1px solid black;
  display: flex;
  flex-direction:column;
  justify-content: flex-end;
  background-color: #faedcd;
`

function App() {
  return (
    <MainContainer>
      <ChatBox>
        <Conversa>
          <Mensagem></Mensagem>
        </Conversa>
        <SecaoMensagem></SecaoMensagem>
      </ChatBox>
    </MainContainer>
  );
}

export default App;
