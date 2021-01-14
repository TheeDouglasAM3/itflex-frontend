import React, { ReactElement } from 'react'
import Routes from './routes'

import GlobalStyle from './styles/global'

function App(): ReactElement {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  )
}

export default App
