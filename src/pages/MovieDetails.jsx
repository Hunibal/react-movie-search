import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import MovieDetailsCard from '../components/MovieDetailsCard'


export default function MovieDetails() {



    const { id } = useParams()

    const [ movieDetails, setMovieDetails ] = useState(null)

    useEffect(() => {          
          
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits%2Cvideos%2Csimilar&language=en-US`)
            .then(response => response.json())
            .then(response => setMovieDetails(response))
            .catch(err => console.error(err))
    },[id])
   

    if (!movieDetails) {
        return <div>Loading...</div>  // Show loading message until data is available
    }
    
    return (
        <MovieDetailsCard movieDetails={movieDetails} />
    )
}