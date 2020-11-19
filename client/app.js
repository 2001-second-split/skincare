import React from 'react'

import {Navbar, Search, SearchHook, SingleIngredient} from './components'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

// If our routes grow, we will import them from a separate routes file
// import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route path="/id/:id" component={SingleIngredient} />
        <Route component={SearchHook} />
      </Switch>

      {/* <Routes /> */}
    </div>
  )
}

export default App
