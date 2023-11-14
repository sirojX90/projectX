import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProducContextProvider from './context/ProducContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ProducContextProvider>
        <App/>
    </ProducContextProvider>
);