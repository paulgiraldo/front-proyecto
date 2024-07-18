import { Link, Outlet } from "react-router-dom"

const LayoutBase = ({ sesion }) => {


    console.log(sesion)
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
                <Link to="/logout" className="hover:font-bold text-red-500 rounded-full bg-white px-3 text-center">Cerrar Sesión</Link>
             )}


            { !sesion.activo  && (
                <Link to="/login" className="hover:font-bold text-blue-700 rounded-full bg-white px-3 text-center">Inicial Sesión</Link>
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