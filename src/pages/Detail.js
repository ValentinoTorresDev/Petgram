import React from 'react'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

export const Detail = ({ detailID }) => (
  <Layout title={`Fotografía ${detailID}`}>
    <PhotoCardWithQuery id={detailID} />
  </Layout>
)
