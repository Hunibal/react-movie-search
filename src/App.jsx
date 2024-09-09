import React from 'react'
import {Outlet} from "react-router-dom"

import './App.css'

import SearchMovies from './components/SearchMovies'
import Header from './components/Header'
import Footer from './components/Footer'



export default function App() {
  const currentYear = new Date().getFullYear()
  return (
    <>
       <div className="container">
          <header className="header">
            <Header />
            <SearchMovies />
          </header>
        <Outlet />
      </div>
      <Footer currentYear={currentYear} />
    </>
 
  )
}

