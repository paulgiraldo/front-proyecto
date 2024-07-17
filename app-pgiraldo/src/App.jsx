import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LayoutBase from './layouts/LayoutBase'
import LoginPage from './login/LoginPage'
import BienvenidaPage from './login/BienvenidaPage'
import { useState } from 'react'

const App = () => {

  const LOGIN_BASE = {
    activo : false,
    usuario : 'Usuario de Prueba',
    perfil : '',
    token : ''
  }

  const [ sesion, setSesion ] = useState(LOGIN_BASE)


  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LayoutBase sesion={sesion}  />}>
          <Route path='/' element={<BienvenidaPage />} />

          <Route path='/login' element={<LoginPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App