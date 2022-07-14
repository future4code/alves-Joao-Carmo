import * as React from 'react'
import { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ListTripsPage from './pages/ListTripsPage'
import ApplicationFormPage from './pages/ApplicationFormPage'
import AdminHomePage from './pages/AdminHomePage'
import CreateTripPage from './pages/CreateTripPage'
import TripDetailsPage from './pages/TripDetailsPage'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export default function App() {
  
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/admin/trips/list' element={<AdminHomePage />} />
          <Route path='/admin/trips/create' element={<CreateTripPage />} />
          <Route path='/admin/trips/:id' element={<TripDetailsPage />} />
          <Route path='/trips/list' element={<ListTripsPage />} />
          <Route path='/trips/application' element={<ApplicationFormPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}
