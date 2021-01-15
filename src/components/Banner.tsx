import React from 'react'

import { Container } from '../styles/components/banner'

export default function Banner() {
  return (
    <Container>
      <div className="banner-default">
        <h1>SunshineApp, o seu app para previsão do tempo</h1>
        <p>Descubra a previsão do tempo para os próximos 5 dias em sua cidade!</p>
      </div>
    </Container>
  )
}
