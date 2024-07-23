import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import RecipeItemGlobalContext from './components/context/Index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <React.StrictMode>
      <RecipeItemGlobalContext>
          <App/>
      </RecipeItemGlobalContext>
    </React.StrictMode>
  
  </BrowserRouter>
)
