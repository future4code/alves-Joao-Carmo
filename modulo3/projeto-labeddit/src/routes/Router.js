import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Post from '../pages/Post';
import Feed from '../pages/Feed';
import Navbar from '../components/Navbar';
import GlobalState from '../components/global/GlobalState';

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalState>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/post' element={<Post />}></Route>
          <Route path='/feed' element={<Feed />}></Route>
        </Routes>
      </GlobalState>
    </BrowserRouter>
  )
}

export default Router;