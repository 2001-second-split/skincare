import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

const SingleIngredient = props => {
  const [data, setData] = useState({})

  useEffect(
    () => {
      async function fetchIngredient() {
        const result = await axios.get(
          `/api/ingredients/id/${props.match.params.id}`
        )
        setData(result.data)
      }
      fetchIngredient()
    },
    [props.match.params.id]
  )

  const findInteractions = interactions => {
    if (interactions) {
      return interactions.map(i => (
        <div key={i.id}>
          <CardActions>
            <Link to={`/id/${i.id}`} onClick={() => setData(i)}>
              {i.name}
            </Link>
          </CardActions>
        </div>
      ))
    } else {
      return 'none'
    }
  }

  if (data) {
    return (
      <Card>
        <Link to="/">back to search</Link>
        <CardContent>
          <CardHeader title={data.name} />
          <div>{data.description}</div>
          <div>Best time to use: {data.bestTime}</div>
          <div>Interactions: {findInteractions(data.Ingredient1)}</div>
        </CardContent>
      </Card>
    )
  } else {
    return 'Ingredient Not Found'
  }
}

export default SingleIngredient
