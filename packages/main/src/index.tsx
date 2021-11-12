import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { routes as ListRoutes } from '@lerna-github-actions/list'
import { routes as CreateRoutes } from '@lerna-github-actions/create'

ReactDOM.render(
  <React.StrictMode>
    <App routes={[...ListRoutes, ...CreateRoutes]} />
  </React.StrictMode>,
  document.getElementById('root')
)
