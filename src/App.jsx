import { useState } from 'react'
import Home from './pages/Home'
import SigninPage from './pages/SigninPage'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/sign-in" element={<SigninPage />} /> */}
      </Routes>
    </>
  )
}

export default App
