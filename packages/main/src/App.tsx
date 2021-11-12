import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Menu from './components/Menu'
import GlobalStyle from './GlobalStyles'
import { AppRoute } from './types/AppRoute'

type AppProps = {
  routes: AppRoute[]
}

const App = ({ routes }: AppProps) => (
  <BrowserRouter>
    <GlobalStyle />
    <Menu />
    <Routes>
      {routes.map((item, index) => (
        <Route key={index} path={item.path} element={item.component} />
      ))}
    </Routes>
  </BrowserRouter>
)

export default App
