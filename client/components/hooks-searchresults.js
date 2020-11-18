import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

export default function SearchResultsHook(props) {
  const {list, searchTerm} = props
  let visibleList = searchTerm
    ? list.filter(ingredient =>
        ingredient.name.toLowerCase().includes(searchTerm)
      )
    : list

  return (
    <div>
      {visibleList.length
        ? visibleList.map(ingredient => (
            <div key={ingredient.id}>
              <Link to={`/id/${ingredient.id}`}>{ingredient.name}</Link>
            </div>
          ))
        : list.length ? 'No ingredients found' : 'Loading ingredients list...'}
    </div>
  )
}
