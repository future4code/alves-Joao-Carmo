import React from "react";
import Router from "./routes/Router";
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./components/Navbar";
import GlobalState from "./components/global/GlobalState";

function App() {
  return (
    <div>
      <ChakraProvider>
          <Router />
      </ChakraProvider>
    </div>
  );
}

export default App;
