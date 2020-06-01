import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

const query = gql`
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

export const ListOfPhotoCards = ({ categoryId }) => (
  <Query query={query}>
    {
      ({ loading, error, data }) => {
        if (loading) { return null }
        if (error) { console.log(error) }
        return <ListOfPhotoCardsComponent data={data} />
      }
    }
  </Query>
)
