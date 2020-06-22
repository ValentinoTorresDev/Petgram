import React from 'react'
import { Grid, Image, StyledLink } from './styles'
import propTypes from 'prop-types'
export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {
        favs.map(fav =>
          <StyledLink key={fav.id} to={`/detail/${fav.id}`}>
            <Image src={fav.src} />
          </StyledLink>)
      }
    </Grid>
  )
}

ListOfFavs.propTypes = {
  favs: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      src: propTypes.string
    })
  )
}
