import React, { useEffect, useState } from 'react';
import axios from 'axios'

import SearchBarHook from './hooks-searchbar'
import SearchResultsHook from './hooks-searchresults'

export default function SearchHook() {
  const [ingredients, setIngredients] = useState([]);
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect( () => {
    async function fetchIngredients() {
      setIsError(false);
      try {
        const res = await axios.get('/api/ingredients')
        setIngredients(res.data)
      } catch {
        setIsError(true);
      }
    }
    fetchIngredients();
  }, [])

  function onSearch(term) {
    term = term.toLowerCase();
    setSearchTerm(term);
  }

  return (
    <div>

      {isError && <div>Something went wrong ...</div>}

      <h2>What would you like to lookup? </h2>
      <SearchBarHook onSearchTermChange={onSearch} />
      <br/>

      <SearchResultsHook list={ingredients} searchTerm={searchTerm}/>
      {/* <ul>
        {ingredients.map(ingred => (
          <li key={ingred.id}>
            {ingred.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}
