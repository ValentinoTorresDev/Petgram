import React from 'react'
import { ListOfFavs } from '../components/ListOfFavs.js'
import { useGetFavs } from '../hooks/useGetFavs'
export const Favs = () => {
  const { data, loading, error } = useGetFavs()
  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error!</p>
  const { favs } = data
  return (
    <>
      <h1>Favs</h1>
      <ListOfFavs favs={favs} />
    </>
  )
}
