import React from 'react'
import ClientHome from './Client/ClientHome'
import ClientNavBar from './Client/ClientNavBar';
import ClientAbout from './Client/ClientAbout';
import { Route, Routes, useLocation } from 'react-router-dom'
function App() {
  const location = useLocation();
  const isClientPage = location.pathname.startsWith('/client') || location.pathname === '/';
  return (
    <>
    <main>
      {isClientPage && <ClientNavBar/>}
      <Routes>
        <Route path='/' element={<ClientHome/>}/>
        <Route path='/clientAbout' element={<ClientAbout/>}/>
      </Routes>
    </main>
    </>
  )
}

export default App
