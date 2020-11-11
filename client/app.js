import React from 'react'

import {Navbar, Search, SearchHook} from './components'
import Routes from './routes'

const App = () => {

  const style = {color: 'red'}
  return (
    <div>
      <Navbar />

      <h3 style={style}>Component built with Classes:</h3>
      <Search />

      <br/>
      <br/>

      <h3 style={style}>Component built with Hooks:</h3>
      <SearchHook />
      {/* <Routes /> */}
    </div>
  )
}

export default App
