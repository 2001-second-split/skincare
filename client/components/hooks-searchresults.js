import React, { useEffect, useState } from 'react';

export default function SearchResultsHook(props) {

  const { list, searchTerm } = props;
  let visibleList = searchTerm ? list.filter(ingredient => ingredient.name.toLowerCase().includes(searchTerm)) : list;

  return (
    <div >
      {visibleList.length ? visibleList.map(ingredient => (
        <div key={ingredient.id} >
          {ingredient.name}
        </div>))
      : (list.length ? 'No ingredients found' : 'Loading ingredients list...')
      }
    </div>
  )
  }
