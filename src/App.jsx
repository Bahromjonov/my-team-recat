import React, { } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import MainRouter from './layout/MainRouter'
import Home from './pages/Home'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRouter />}>
        <Route index element={<Home />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
