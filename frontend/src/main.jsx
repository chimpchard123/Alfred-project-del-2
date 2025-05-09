import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ForumProvider } from './context/ForumContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ForumProvider>
        <App />
      </ForumProvider>
    </BrowserRouter>
  </React.StrictMode>
)

