import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { usePhotoCard } from '../hooks/usePhotoCard'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = usePhotoCard({ id })
  if (loading) { return <h1>Cargando...</h1> }
  if (error) { return <h1>Ha ocurrido un error...</h1> }
  const { photo: { src } } = data
  return (<PhotoCard src={src} />)
}
