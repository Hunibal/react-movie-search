import React, { useState } from "react"
import MovieCard from '../components/MovieCard'
import { useNavigate } from "react-router-dom"

import { IoIosSearch } from "react-icons/io";


export default function SearchMovies() {

    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])

    const navigate = useNavigate()

    const searchMovies =  (e) => {
        e.preventDefault()
        if(query) {
            navigate(`/search?q=${query}`)
        }
    }

    return (
        <>
        <form className="form" onSubmit={searchMovies}>
            <IoIosSearch className="search-icon" />
            
            <input className="input" type="text" name="query" 
            placeholder="i.e. Jurassic Park" 
            value={query} onChange={(e) => setQuery(e.target.value)}
            />
            <button className="button" type="submit" >Search</button>
        </form>  
        </>
    )
}
