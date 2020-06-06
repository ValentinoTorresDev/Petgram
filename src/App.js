import React from 'react'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Router } from '@reach/router'
import { Navbar } from './components/Navbar'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailID = urlParams.get('detail')

  return (
    <>
      <Logo />
      <GlobalStyle />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailID' />
      </Router>
      <Navbar />
    </>
  )
}
