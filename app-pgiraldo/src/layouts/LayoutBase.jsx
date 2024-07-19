import { Link, Outlet, useNavigate } from "react-router-dom"
import authSesion from "../util/authSesion.js"

const LayoutBase = ({ sesion, setSesion }) => {
  const navigate = useNavigate();

  const auth = { 'sesion': authSesion.existSesion() }  
  
  if (sesion.activo == false && auth.sesion == true) {
    const sesion0 = { 'sesion': authSesion.getSesion() }
    const sesion1 = JSON.parse(sesion0.sesion)  
  
    setSesion(sesion1)
  }
  
  const CerrarSesionAqui = () => {
    const LOGIN_BASE = {
      activo : false,
      usuario : '',
      perfil : '',
      token : ''
    }

    setSesion(LOGIN_BASE)
    authSesion.deleteSesion()
    console.log("llego aqui a cerrar")
    navigate('/')
    console.log("se reenvio a \/")
  }
  
  return (
    <>
      <header className='py-2 px-0 '>
        <div className="container mx-auto flex justify-between bg-lime-300 p-3 rounded-xl">
          <h1 className="font-bold">Aplicacion Espacio del Colaborador</h1>
          <nav className="flex gap-8">
            
            { sesion.activo && sesion.perfil === 'VACACION_USUARIO' && (
                <Link to="/vacaciones" className="hover:font-bold rounded-full bg-blue-300 px-3 text-center">Vacaciones</Link>
             )}

            { sesion.activo && sesion.perfil === 'ADMIN' && (
                <Link to="/logup" className="hover:font-bold rounded-full bg-blue-300 px-3">Nuevo Usuario</Link>
             )}

            { sesion.activo  && (
                <Link to="/" onClick={CerrarSesionAqui} className="hover:font-bold text-red-500 rounded-full bg-white px-3 text-center">Cerrar Sesión</Link>
             )}


            { !sesion.activo  && (
                <Link to="/login" className="hover:font-bold text-blue-700 rounded-full bg-white px-3 text-center">Iniciar Sesión</Link>
             )}


          </nav>
        </div>
      </header>
     
      <main className="my-6">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default LayoutBase