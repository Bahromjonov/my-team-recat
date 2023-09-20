import React, { } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import NotFountPage from './components/NotFountPage'

import MainRouter from './layout/MainRouter'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRouter />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='*' element={<NotFountPage/>}/>
        
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
