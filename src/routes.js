import React from 'react'
import { Route } from 'react-router-dom'

import Home from 'src/pages/Home'
import Chart from 'src/pages/Chart'

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/chart/:symbol" component={Chart} />
  </div>
)
