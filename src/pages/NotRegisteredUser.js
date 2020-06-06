import React from 'react'
import Context from '../Context'
import { Button } from '../components/FavButton/styles'
export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <form onSubmit={activateAuth}>
            <button>Ingresar</button>
          </form>
        )
      }
    }
  </Context.Consumer>
)
