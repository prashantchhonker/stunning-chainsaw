import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline';
import {Provider} from "react-redux"
import {store} from "./app/store.js"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <CssBaseline/>
                <Routes>
                    <Route path="/*" element={<App/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
