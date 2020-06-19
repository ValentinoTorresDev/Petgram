import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export const Home = ({ id }) => {
  return (
    <Layout
      title='Tu app de fotos de mascotas'
      subtitle='Con petgram puedes encontrar fotos de animales domesticos'
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}
