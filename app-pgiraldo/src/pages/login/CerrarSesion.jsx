
import authSesion from "../../util/authSesion";
import { useNavigate } from "react-router-dom";


const CerrarSesion = ( { sesion, setSesion } ) => {

  const auth = { 'sesion': authSesion.existSesion() }  
  const navigate = useNavigate();

  if (sesion.activo == false && auth.sesion == true) {
    const sesion0 = { 'sesion': authSesion.getSesion() }
    const sesion1 = JSON.parse(sesion0.sesion)  
  
    setSesion(sesion1)
  }

  const LOGIN_BASE = {
    activo : false,
    usuario : '',
    perfil : '',
    token : ''
  }

  console.log("Llego a Cerrar Sesion")
  console.log(sesion)

  if (sesion.activo == true) {
      setSesion(LOGIN_BASE)
      authSesion.deleteSesion()
      

      console.log("Sesion, Despues del Cambio")
      console.log(sesion)

  }



}

export default CerrarSesion