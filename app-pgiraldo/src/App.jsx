import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import LayoutBase from './layouts/LayoutBase'
import LoginPage from './pages/login/LoginPage'
import BienvenidaPage from './pages/login/BienvenidaPage'
import VacacionesLista from './pages/vacaciones/VacacionesLista'
import NuevoUsuario from './pages/logup/NuevoUsuario'
import CerrarSesion from  './pages/login/CerrarSesion'

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

        <Route path='/' element={<LayoutBase sesion={sesion}  />}>
          <Route path='/' element={<BienvenidaPage />} />

          { sesion.activo && sesion.perfil === 'VACACION_USUARIO' && (
            <Route path='/vacaciones' element={<VacacionesLista sesion={sesion} />} />
          )}

          { sesion.activo && sesion.perfil === 'ADMIN' && (
            <Route path='/logup' element={<NuevoUsuario />} />
          )}

          { sesion.activo  && (
            <Route path='/logout' element={<CerrarSesion />} />
          )}
          
          { !sesion.activo  && (
            <Route path='/login' element={<LoginPage 
                                            sesion={sesion}
                                            setSesion={setSesion} 
                                            />} />
          )}

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App