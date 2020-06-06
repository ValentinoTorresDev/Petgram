import React from 'react'
import { Nav, StyledLink } from './styles'
import { MdHome, MdFavoriteBorder, MdPeopleOutline } from 'react-icons/md'

const SIZE = '32px'

export const Navbar = () => {
  return (
    <Nav>
      <StyledLink to='/'><MdHome size={SIZE} /></StyledLink>
      <StyledLink to='/favs'><MdFavoriteBorder size={SIZE} /></StyledLink>
      <StyledLink to='/user'><MdPeopleOutline size={SIZE} /></StyledLink>
    </Nav>
  )
}
