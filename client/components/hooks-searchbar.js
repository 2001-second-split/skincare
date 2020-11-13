import React, { useState } from 'react';

export default function SearchBarHook(props) {

    const [term, setTerm] = useState('');

    function onInputChange(word) {
      setTerm(word);
      if(props.onSearchTermChange){
        props.onSearchTermChange(word)
      }
    }

    return (
      <div className="search-box">
        <input
          className="search-input"
          id="search"
          type="text"
          placeholder="I'm looking for..."
          value={term}
          onChange={ (event) => onInputChange(event.target.value)}
        />
    </div>
    )
  }
