import React from 'react'
import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCardsComponent } from './components/ListOfPhotoCards'
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => (
  <>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCardsComponent categoryId={1} />
  </>
)
