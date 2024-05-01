import React from 'react'
import ReactDOM from 'react-dom/client'

import { Header } from './components/header/index.jsx'
import { Signature } from './components/signature/index.jsx'
import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Signature />
  </React.StrictMode>,
)
