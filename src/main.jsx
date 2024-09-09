import { StrictMode } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home'
import './index.css'
import SearchResults from './pages/SearchResults.jsx'
import MovieDetails from './pages/MovieDetails.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/search/:id" element={<MovieDetails />} />
          </Route>
        </Routes>
    </BrowserRouter>
)
