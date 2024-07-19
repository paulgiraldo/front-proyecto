import { useState } from "react"
import BaseButton from "../../components/shared/BaseButton"
import BaseInput from "../../components/shared/BaseInput"
import { LoginService } from "../../services/LoginService"
import { useNavigate } from "react-router-dom"
import { Navigate } from 'react-router-dom'
import authSesion from "../../util/authSesion.js"

const LoginPage = ({ sesion, setSesion }) => {
  
  const auth = { 'sesion': authSesion.existSesion() }  
  
  if (sesion.activo == false && auth.sesion == true) {
    const sesion0 = { 'sesion': authSesion.getSesion() }
    const sesion1 = JSON.parse(sesion0.sesion)  
  
    setSesion(sesion1)
  }


  const INITIAL_FORM = {
    usuarioCod : '',
    password : ''
  }

  const navigate = useNavigate();

  const [form, setForm] = useState(INITIAL_FORM)

  const handleChange = (event) => {
      const { name, value } = event.target

      setForm({...form, [name]: value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Llego'+auth)

    const response = await LoginService(form)


    if (response) {
        const newSesion = {
          activo : true,
          usuario : response.usuarioNom,
          perfil : response.usuarioRol[0].rolCod,
          token : response.token
        }

       authSesion.setSesion(JSON.stringify(newSesion))

        setSesion(newSesion)


        navigate('/')
    } else {
      // Mostramos un mensaje de un error
      console.log('OK')
    }

  }

  return (
    ( auth.sesion == false ? (
            <main className="w-[400px] m-auto flex flex-col gap-5">
              <div className="bg-slate-300 p-8 rounded-lg flex flex-col gap-6">
                <h2 className="text-center text-4xl font-bold"> ¡ BIENVENIDO !</h2>

                <p className="font-light text-center">Ingresa un nombre de usuario y password</p>

                <form onSubmit = {handleSubmit}>
                  <BaseInput
                    label='Usuario:'
                    placeholder='pablo'
                    name="usuarioCod"
                    value={form.usuarioCod}
                    onChange={handleChange}
                  />

                  <BaseInput
                    type="password"
                    label='Password'
                    placeholder='mypassword'
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                  />

                  <BaseButton
                    type="submit"
                    label='Login'
                    bgColor='bg-violet-500'
                    classx='w-full hover:bg-violet-600 duration-300'
                  />

              
                </form>


              </div>
            </main>
        ) : <Navigate to='/'/>)
  )
}

export default LoginPage