import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const withPhotos = gql`
  query getPhotos($categoryId: ID){
    photos(categoryId: $categoryId){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCardsComponent = () => {
  const { loading, data, error } = useQuery(withPhotos, { variables: { categoryId: '1' } })
  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error ;c</p>
  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}
