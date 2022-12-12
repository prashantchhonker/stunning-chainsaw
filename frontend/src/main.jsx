import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <CssBaseline/>
          <Routes>
              <Route path="/*" element={<App/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
