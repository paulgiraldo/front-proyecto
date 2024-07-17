import { Link, Outlet } from "react-router-dom"

const LayoutBase = ({ sesion }) => {


    console.log(sesion)
  return (
    <>
      <header className='py-2 px-0 '>
        <div className="container mx-auto flex justify-between bg-lime-300 p-3 rounded-xl">
          <h1 className="font-bold">Aplicacion Espacio del Colaborador</h1>
          <nav className="flex gap-8">
            
            {/*Renderizado condicional: sesion.activo===true y sesion.perfil='VACACIONES_USER' */}
                <Link to="/vacaciones" className="hover:font-bold">Vacaciones</Link>


            {/*Renderizado condicional: sesion.activo===true y sesion.perfil='ADMIN' */}
            <Link to="/logup" className="hover:font-bold">Logup</Link>

            {/*Renderizado condicional: sesion.activo===true */}
            <Link to="/login" className="hover:font-bold">Logoff</Link>

            {/*Renderizado condicional: sesion.activo===false */}
            <Link to="/login" className="hover:font-bold">Login</Link>

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