import React from 'react'

import {Navbar, Search, SearchHook, SingleIngredient} from './components'
import Routes from './routes'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

const App = () => {
  const style = {color: 'red'}
  return (
    <div>
      <Navbar />

      <h3 style={style}>Component built with Classes:</h3>
      <Search />

      <br />
      <br />

      <h3 style={style}>Component built with Hooks:</h3>
      <Switch>
        <Route path="/id/:id" component={SingleIngredient} />
        <Route component={SearchHook} />
      </Switch>
      {/* <SearchHook /> */}
      {/* <Routes /> */}
    </div>
  )
}

export default App
