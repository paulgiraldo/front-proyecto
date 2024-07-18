import { useEffect } from "react"
import { VacacionesListaService } from "../../services/LoginService"

const VacacionesLista = ({ sesion }) => {

  useEffect( async () => {
    const response = await VacacionesListaService(sesion)

    console.log(JSON.stringify(response,null,2))

  }, [] )





  return (
    <div>VacacionesLista</div>
  )
}

export default VacacionesLista