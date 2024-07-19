import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import LayoutBase from './layouts/LayoutBase'
import LoginPage from './pages/login/LoginPage'
import BienvenidaPage from './pages/login/BienvenidaPage'
import VacacionesLista from './pages/vacaciones/VacacionesLista'
import NuevoUsuario from './pages/logup/NuevoUsuario'
import CerrarSesion from  './pages/login/CerrarSesion'
import VacacionesCrea from './pages/vacaciones/VacacionesCrea'

const App = () => {

  const LOGIN_BASE = {
    activo : false,
    usuario : 'Usuario de Prueba',
    perfil : 'VACACION_USUARIO',
    token : ''
  }

  const [ sesion, setSesion ] = useState(LOGIN_BASE)

  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LayoutBase />}>
          <Route path='/' element={<BienvenidaPage />} />
          <Route path='/login' element={<LoginPage />} />

          <Route path='/vacaciones' element={<VacacionesLista />} />
          <Route path='/vacaciones/crea' element={<VacacionesCrea  />} />
          <Route path='/logup' element={<NuevoUsuario />} />
          <Route path='/logout' element={<CerrarSesion />} />
          
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App