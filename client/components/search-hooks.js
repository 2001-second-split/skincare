import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function SearchHook() {
  const [ingredients, setIngredients] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');

  useEffect( () => {
    async function fetchIngredients() {
      const res = await axios.get('/api/ingredients')
      setIngredients(res.data)
    }
    fetchIngredients();
  }, [])

  return (
    <div>
      These are your ingredients:
      <ul>
        {ingredients.map(ingred => (
          <li key={ingred.id}>
            {ingred.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

// function SearchBarHook(term) {
//   const [term, setTerm] = useState('');

//   useEffect

//   return (
//     <div className="search-box">
//       <input
//         className="search-input"
//         id="search"
//         type="text"
//         placeholder="I'm looking for..."
//         value={this.state.term}
//         onChange={ (event) => this.onInputChange(event.target.value)}
//         onKeyDown={this.props.onKeyDown || null}
//       />
//   </div>
//   )
// }
