import React from 'react'
import { FavsWithQuery } from '../containers/GetFavorities'
import { Layout } from '../components/Layout'

export const Favs = () => (
  <Layout title='Tus Favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
    <h1>Favs</h1>
    <FavsWithQuery />
  </Layout>
)

export { Favs as default } from './Favs'
