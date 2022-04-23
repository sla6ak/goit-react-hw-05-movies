import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Cast = () => {
  const [filmInfo] = useOutletContext()
  const arrActors = filmInfo.credits.cast
  return (
    <>
    <h3>cast</h3>
    <ul>{
      arrActors.map((actor)=><li key={actor.id}>{actor.name}</li>)
    }</ul></>
  )
}

export default Cast