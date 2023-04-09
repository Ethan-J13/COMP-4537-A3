import React from 'react'
import Pokemon from './Pokemon'
function page({ currentPokemons, currentPage }) {
  return (
    <div>
      <h2 class="page-number">
        Page {currentPage}
      </h2>
      <div className="pokemon-list">
        {
          currentPokemons.map(item => {
            return <Pokemon pokemon={item} />
          })
        }
      </div>
    </div>
  )
}

export default page