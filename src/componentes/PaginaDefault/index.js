import Banner from 'componentes/Banner'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PaginaDefault() {
  return (
    <main>
        <Banner />

        {/* renderizar conteúdo da rota aqui com outlet*/}

        <Outlet />

    </main>
  )
}
