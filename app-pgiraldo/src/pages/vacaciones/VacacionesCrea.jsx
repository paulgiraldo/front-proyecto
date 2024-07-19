import { useState } from "react"
import authSesion from "../../util/authSesion"
import { VacacionesCreaService } from "../../services/LoginService"
import { useNavigate } from "react-router-dom"

const VacacionesCrea = ({ sesion, setSesion }) => {

  const navigate = useNavigate();

  const auth = { 'sesion': authSesion.existSesion() }  
  
  if (sesion.activo == false && auth.sesion == true) {
    const sesion0 = { 'sesion': authSesion.getSesion() }
    const sesion1 = JSON.parse(sesion0.sesion)  
  
    setSesion(sesion1)
  }

  const REGISTRO_BASE =   {
                        trabCod:"",
                        trabNom:"",
                        fechaInicial:Date(),
                        nroDias:0,
                        fechaFinal:"",
                        motivo:""
                      }

  const [form, setForm] = useState(REGISTRO_BASE)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({...form, [name]: value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("en el submit")
    console.log(sesion)
    console.log(form)

    const enviarData =  [sesion, form]
    const response = await VacacionesCreaService(enviarData)

    if (response) {

      navigate('/vacaciones')
  } else {
    // Mostramos un mensaje de un error
    console.log('Sucedio un Error')
  }
  }


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
      <h2 className="text-2xl font-bold mb-6">Nueva Solicitud de Vacaciones</h2>

      <form onSubmit = {handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Código del Trabajador
          </label>
          <input
            type="text"
            name="trabCod"
            value={form.trabCod}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Ingrese Código del Trabajador"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Nombre del Trabajador
          </label>
          <input
            type="text"
            name="trabNom"
            value={form.trabNom}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Ingrese nombre del Trabajador"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Fecha Inicial
          </label>
          <input
            type="date"
            name="fechaInicial"
            value={form.fechaInicial}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Ingrese Fecha de Inicio"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Número de Días
          </label>
          <input
            type="number"
            name="nroDias"
            value={form.nroDias}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Ingrese Número de Días"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Fecha Final
          </label>
          <input
            type="date"
            name="fechaFinal"
            value={form.fechaFinal}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Ingrese Fecha de Termino"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Motivo de la Solicitud
          </label>
          <input
            type="text"
            name="motivo"
            value={form.motivo}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Ingrese Motivo de la Solicitud"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Grabar Registro
        </button>
      </form>
    </div>
  </div>
)
}

export default VacacionesCrea