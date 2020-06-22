import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'
import { Link } from '@reach/router'
import propTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    toggleLike({ variables: { input: { id } } })
                  }

                  return (<FavButton liked={liked} likes={likes} onClick={handleFavClick} />)
                }
              }
            </ToggleLikeMutation>
          </>
      }
    </Article>
  )
}

PhotoCard.propTypes = {
  id: propTypes.string.isRequired,
  liked: propTypes.bool.isRequired,
  src: propTypes.string.isRequired,
  likes: function (props, propsName, componentName) {
    const propValue = props[propsName]

    if (propValue === undefined) {
      return new Error(`${propsName} El like no esta definido`)
    }

    if (propValue < 0) {
      return new Error(`${propsName} El valor tiene que ser mayor a cero`)
    }
  }
}
