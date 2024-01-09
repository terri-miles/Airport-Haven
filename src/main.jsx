import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalContext from '../src/Utils/GlobalContext.jsx'
import reducer, { initialState } from '../src/Utils/reducer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext initialState={initialState} reducer={reducer}>
      <Router>
        <App />
      </Router>
    </GlobalContext>
   
  </React.StrictMode>,
)
