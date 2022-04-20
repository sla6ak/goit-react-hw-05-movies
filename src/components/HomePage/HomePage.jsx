import React from 'react'
import { useState, useEffect } from "react";
import { findPopularFilms } from 'utilits/fetchAPI';

const HomePage = props => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    setPopular(findPopularFilms())
  }, [])

  // просто проверка API
  useEffect(() => {
      if(popular.length === 0){return}
      console.log(popular);
  }, [popular])

  return (
    <div to='/'>Home</div>
  )
}

export default HomePage