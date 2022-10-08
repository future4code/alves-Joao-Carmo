import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../pages/Home';
import History from '../pages/History';


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/history' element={<History />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;