import React from 'react'
import { Nav, StyledLink } from './styles'
import { MdHome, MdFavoriteBorder, MdPeopleOutline } from 'react-icons/md'

const SIZE = '32px'
const ACTIVE = ({ isCurrent }) => {
  return isCurrent ? { className: 'active' } : {}
}

export const Navbar = () => {
  return (
    <Nav>
      <StyledLink getProps={ACTIVE} to='/'><MdHome size={SIZE} /></StyledLink>
      <StyledLink getProps={ACTIVE} to='/favs'><MdFavoriteBorder size={SIZE} /></StyledLink>
      <StyledLink getProps={ACTIVE} to='/user'><MdPeopleOutline size={SIZE} /></StyledLink>
    </Nav>
  )
}
