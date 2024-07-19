import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import LayoutBase from './layouts/LayoutBase'
import LoginPage from './pages/login/LoginPage'
import BienvenidaPage from './pages/login/BienvenidaPage'
import VacacionesLista from './pages/vacaciones/VacacionesLista'
import NuevoUsuario from './pages/logup/NuevoUsuario'
import CerrarSesion from  './pages/login/CerrarSesion'
import VacacionesCrea from './pages/vacaciones/VacacionesCrea'
import authSesion from "./util/authSesion";

const App = () => {

  const LOGIN_BASE = {
    activo : false,
    usuario : 'Usuario de Prueba',
    perfil : 'VACACION_USUARIO',
    token : ''
  }

  const [ sesion, setSesion ] = useState(LOGIN_BASE)

  const auth = { 'sesion': authSesion.existSesion() }  
 
  if (sesion.activo == false && auth.sesion == true) {
    const sesion0 = { 'sesion': authSesion.getSesion() }
    const sesion1 = JSON.parse(sesion0.sesion)  
  
    setSesion(sesion1)
  }


  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LayoutBase sesion={sesion}
                                             setSesion={setSesion} 
                                  />}>
          <Route path='/' element={<BienvenidaPage />} />
          <Route path='/login' element={<LoginPage sesion={sesion}
                                                    setSesion={setSesion} 
                                             />} />

          <Route path='/vacaciones' element={<VacacionesLista sesion={sesion}
                                                              setSesion={setSesion} 
                                              />} />
          <Route path='/vacaciones/crea' element={<VacacionesCrea sesion={sesion}
                                                                  setSesion={setSesion}  
                                                  />} />
          <Route path='/logup' element={<NuevoUsuario sesion={sesion}
                                                      setSesion={setSesion} 
                                        />} />
          
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App