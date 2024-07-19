import { useEffect, useState } from "react"
import { VacacionesListaService } from "../../services/LoginService"
import { useNavigate } from "react-router-dom";
const VacacionesLista = ({ sesion }) => {

  const navigate = useNavigate();

  const [vacaciones, setVacaciones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await VacacionesListaService(sesion);
      setVacaciones(response.response);
    };
    fetchData();
  }, []);

  const handleNuevo= ( () => {
    navigate('/vacaciones/crea')
  })

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
            <th className="px-4 py-2 border">Código</th>
            <th className="px-4 py-2 border">Apellidos y Nombres</th>
            <th className="px-4 py-2 border">Fecha Inicial</th>
            <th className="px-4 py-2 border">Número de Días</th>
            <th className="px-4 py-2 border">Fecha Final</th>
            <th className="px-4 py-2 border">Motivo</th>
            <th className="px-4 py-2 border">Aprob. Jefatura</th>
            <th className="px-4 py-2 border">Aprob. Gerencia</th>
            <th className="px-4 py-2 border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vacaciones.map((vacacion) => (
            <tr key={vacacion.id}>
              <td className="px-4 py-2 border">{vacacion.trabCod}</td>
              <td className="px-4 py-2 border">{vacacion.trabNom}</td>
              <td className="px-4 py-2 border">{vacacion.fechaInicial}</td>
              <td className="px-4 py-2 border">{vacacion.nroDias}</td>
              <td className="px-4 py-2 border">{vacacion.fechaFinal}</td>
              <td className="px-4 py-2 border">{vacacion.motivo}</td>
              <td className="px-4 py-2 border">{vacacion.aprobacion01}</td>
              <td className="px-4 py-2 border">{vacacion.aprobacion02}</td>
              <td className="px-4 py-2 border">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                  Editar
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">
                  Eliminar
                </button>
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