import React from 'react'

const prevPae = () => {
  return (
    <>
      <h1>Goinga</h1>
    </>
  )
}

function Pokemon({ pokemon }) {
  const getThreeDigitId = (id) => {
    if (id < 10) return `00${id}`
    if (id < 100) return `0${id}`
    return id
  }

  return (
    <>
      <img onClick={prevPae} src={`https://github.com/fanzeyi/pokemon.json/raw/master/images/${getThreeDigitId(pokemon.id)}.png`} />
    </>
  )
}

export default Pokemon