import React from 'react'

import imagen01 from '../assets/imagen-bienvenida01.png'

const BienvenidaPage = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={ imagen01 } alt="Esta en la imagen de bienvenida" />

      <h2 className="font-bold text-3xl p-3">Proyecto Espacio Web del Colaborador:</h2>
      <p className="p-3">
        Este proyecto tiene como objetivo implementar un software web y móvil, en donde el colaborador pueda realizar y/o solicitar todos sus tramites documentarios relacionados a su ámbito laboral:
        Podrá visualizar información de su récord laboral, boletas de pago, asistencias y otros.
        Podrá gestionar solicitudes de permisos, vacaciones y otros trámites.
      </p>
    </div>
  )
}

export default BienvenidaPage