import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Likes from './pages/Likes'
import Details from './pages/Details'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<MainLayout><Home></Home></MainLayout>}></Route>
        <Route path='/likes' element={<MainLayout><Likes></Likes></MainLayout>}></Route>
        <Route path='/details/:id' element={<MainLayout><Details></Details></MainLayout>}></Route>
      </Routes>
    </div>
  )
}

export default App