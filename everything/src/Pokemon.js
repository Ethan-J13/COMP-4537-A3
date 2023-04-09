import React from 'react'
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";

import Info from "./info";


function Pokemon({ pokemon }) {
  const getThreeDigitId = (id) => {
    if (id < 10) return `00${id}`
    if (id < 100) return `0${id}`
    return id
  }

  return (
    <>
    <BrowserRouter>
      <NavLink to={`${getThreeDigitId(pokemon.id)}`} component={Info}>

        <img onClick="window.location.reload();" src={`https://github.com/fanzeyi/pokemon.json/raw/master/images/${getThreeDigitId(pokemon.id)}.png`} />
      </NavLink>
      </BrowserRouter>
    </>
  )
}

export default Pokemon