import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import News from './components/News.jsx'
import Store from './components/Store.jsx'
import Message from './components/Message.jsx'
import Sac from './components/Sac.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { HashRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/news" element={<News />} />
        <Route path="/store" element={<Store />} />
        <Route path="/message" element={<Message />} />
        <Route path="/sac" element={<Sac />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)