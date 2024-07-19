import { useEffect, useState } from "react"
import { VacacionesListaService, VacacionesEliminaService } from "../../services/LoginService"
import { useNavigate } from "react-router-dom";
import authSesion from "../../util/authSesion";
import { Toaster, toast } from "sonner"

const VacacionesLista = ({ sesion, setSesion }) => {

  const auth = { 'sesion': authSesion.existSesion() }  
 
  if (sesion.activo == false && auth.sesion == true) {
    const sesion0 = { 'sesion': authSesion.getSesion() }
    const sesion1 = JSON.parse(sesion0.sesion)  
  
    setSesion(sesion1)
  }

  const navigate = useNavigate();

  const [vacaciones, setVacaciones] = useState([]);

  const fetchData = async () => {
    const response = await VacacionesListaService(sesion);
    setVacaciones(response.response);
    console.log("Ejecuto el fechData")
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNuevo= ( () => {
    navigate('/vacaciones/crea')
  })

  const handleEliminar = async (event) => {
    const { id } = event.target.dataset

    console.log("antes event")
    console.log(event.target)
    console.log("despues event")

    const opciones = {
      codigo : id,
      motivo : 'Desde la App',
    }
  
    console.log('Llego al HandleEliminar: '+id)

    const enviarData =  [sesion, opciones]
    const response = await VacacionesEliminaService(enviarData)

    console.log(response)

    if (response) {
      fetchData();
      toast.success("Elemento Eliminado....")
      navigate('/vacaciones')
    } else {
      console.log('Sucedio un Error')
    }

  }


  return (
    
    <div className="p-4">
      <div className="flex flex-row justify-between">
        <h1 className="text-xl font-bold mb-4">Listado de Solicitudes de Vacaciones</h1>
        <button 
            className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-1 rounded mr-2"
            onClick={handleNuevo}>
                  Nuevo Registro
        </button>
      </div>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">Item</th>
            <th className="px-4 py-2 border">DNI</th>
            <th className="px-4 py-2 border">Apellidos y Nombres</th>
            <th className="px-4 py-2 border">Fecha Inicial</th>
            <th className="px-4 py-2 border">Número de Días</th>
            <th className="px-4 py-2 border">Fecha Final</th>
            <th className="px-4 py-2 border">Motivo</th>
            <th className="px-4 py-2 border">Aprob. Jefatura</th>
            <th className="px-4 py-2 border">Aprob. Gerencia</th>
            <th className="px-4 py-2 border">Acción</th>
          </tr>
        </thead>
        <tbody>
          {vacaciones.map((vacacion) => (
            <tr key={vacacion.id}>
              <td className="px-4 py-2 border">{vacacion.id}</td>
              <td className="px-4 py-2 border">{vacacion.trabCod}</td>
              <td className="px-4 py-2 border">{vacacion.trabNom}</td>
              <td className="px-4 py-2 border">{vacacion.fechaInicial}</td>
              <td className="px-4 py-2 border">{vacacion.nroDias}</td>
              <td className="px-4 py-2 border">{vacacion.fechaFinal}</td>
              <td className="px-4 py-2 border">{vacacion.motivo}</td>
              <td className="px-4 py-2 border">{vacacion.aprobacion01}</td>
              <td className="px-4 py-2 border">{vacacion.aprobacion02}</td>
              <td className="px-4 py-2 border">
                { vacacion.aprobacion01=='N'? (
                  <>
                      <button className="bg-red-200 hover:bg-red-400 rounded-lg px-1 py-1"
                          data-id={vacacion.id}
/*                          
                          onClick={ () => {
                            toast('Quieres Eliminar el Elemento Seleccionado?',{
                              action: {
                                label: "Continuar",
                                onClick: handleEliminar
                              }
                            })
                          }}                                                    
 */                      onClick={handleEliminar}   
                      >
                      ❌
                      </button>
                      <Toaster />

                  </>

                ) : (' ')
                }

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default VacacionesLista