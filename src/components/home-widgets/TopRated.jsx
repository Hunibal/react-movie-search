import React from "react"
import { Link } from "react-router-dom"

export default function TopRated({ movie }) { 

   return (
    <div className="card discover--card">
        <Link to={`/search/${movie.id}`}>
        <img className="discover--image"
                         src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                         alt={movie.title + ' poster'}
                         />
            <h5 className="discover--title">{movie.title}</h5> 
        </Link>
    </div>
   )
}