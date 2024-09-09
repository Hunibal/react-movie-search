import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import MovieCard from '../components/MovieCard'

export default function SearchResults() {
    const location = useLocation()
    const query = new URLSearchParams(location.search).get('q')
    const encodedQuery = encodeURIComponent(query.toLowerCase())

    const [movies, setMovies] = useState([])
    const [movieGenres, setMovieGenres] = useState([])
    

    useEffect(() => {
        async function searchMovies() {
            const results = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&query=${encodedQuery}&page=1&include_adult=false`
            try {
                const res = await fetch(results)
                const data = await res.json()

                const moviesWithGenres = data.results.map(movie => {
                    const genreNames = movie.genre_ids.map(id => {
                        const genre = movieGenres.find(g => g.id === id)
                        return genre ? genre.name : null
                    }).filter(name => name !== null)

                    return {
                        ...movie,
                        genreNames,
                        release_date: formatDate(movie.release_date)
                    }
                })
                setMovies(moviesWithGenres)
            } catch (err) {
                console.error(err)
            }
        }
        searchMovies()

        async function getGenres() {
            const results = `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`
            try {
                const res = await fetch(results)
                const data = await res.json()
                setMovieGenres(data.genres)
            } catch (err) {
                console.error(err)
            }
        }       
        getGenres()

       
        
    }, [query])

    function formatDate(dateString) {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }

    return (
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}