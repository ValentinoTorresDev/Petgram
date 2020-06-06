import React from 'react'
import { Nav, LinkStyled } from './styles'
import { MdHome, MdFavoriteBorder, MdPeopleOutline } from 'react-icons/md'

const SIZE = '32px'

export const Navbar = () => {
  return (
    <Nav>
      <LinkStyled to='/'><MdHome size={SIZE} /></LinkStyled>
      <LinkStyled to='/favs'><MdFavoriteBorder size={SIZE} /></LinkStyled>
      <LinkStyled to='/user'><MdPeopleOutline size={SIZE} /></LinkStyled>
    </Nav>
  )
}
