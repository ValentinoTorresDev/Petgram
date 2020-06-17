import styled from 'styled-components'
import { Link } from '@reach/router'

export const StyledLink = styled(Link)`
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0,0,0,.3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  width: 31.33%;
  position: relative;
  &:after{
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`
export const Grid = styled.div`
  padding-top: 32px;
`

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`
