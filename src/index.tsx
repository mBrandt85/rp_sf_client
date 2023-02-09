import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Providers from './providers'
import Header from './components/header'
import Main from './components/main'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Providers>
      <div className="app">
        <Header />
        <Main />
      </div>
    </Providers>
  </React.StrictMode>
)
