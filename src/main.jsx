import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { HashRouter } from 'react-router-dom'
import { StateContext } from './context/StateContext.jsx'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from './Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateContext>
      <HashRouter>
        <Layout>
          <App />
        </Layout>
      </HashRouter>
    </StateContext>
  </React.StrictMode>,
)
