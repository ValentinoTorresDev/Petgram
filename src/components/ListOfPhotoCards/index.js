import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useListOfPhotos } from '../../hooks/useListOfPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useListOfPhotos({ categoryId })
  if (loading) { return <h1>Cargando...</h1> }
  if (error) { return <h1>Ha ocurrido un error...</h1> }
  const { photos = {} } = data
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}
