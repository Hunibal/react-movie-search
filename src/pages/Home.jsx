import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import MostPopular from "../components/home-widgets/MostPopular"
import TopRated from "../components/home-widgets/TopRated"
import Upcoming from "../components/home-widgets/Upcoming"

export default function Home() {
const [mostPopularMovies, setMostPopularMovies] = useState([])
const [topRatedMovies, setTopRatedMovies] = useState([])
const [upcomingMovies, setUpcomingMovies] = useState([])

const currentYear = new Date().getFullYear()

useEffect(() => {
       
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&region=us&sort_by=popularity.desc`)
    .then(response => response.json())
    .then(response => setMostPopularMovies(response.results))
    .catch(err => console.error(err))

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${currentYear}&region=us&sort_by=vote_average.desc&vote_count.gte=500`)
    .then(response => response.json())
    .then(response => setTopRatedMovies(response.results))
    .catch(err => console.error(err))

    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1&region=us`)
    .then(response => response.json())
    .then(response => setUpcomingMovies(response.results))
    .catch(err => console.error(err))

},[])
console.log(mostPopularMovies)
    return (
    <div className="home-container">
        <div className="discover--wrapper">
            <h3 className="details--title">Most Popular Movies</h3>
            <div className="discover--container">
                {mostPopularMovies.filter(movie => movie.poster_path).slice(0, 10).map((movie) => (
                    <MostPopular key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
        <div className="discover--wrapper">
            <h3 className="details--title">Top Rated Movies of {currentYear}</h3>
            <div className="discover--container">
                {topRatedMovies.filter(movie => movie.poster_path).slice(0, 10).map((movie) => (
                    <TopRated key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
        <div className="discover--wrapper">
            <h3 className="details--title">Upcoming Movies</h3>
            <div className="discover--container">
                {upcomingMovies.filter(movie => movie.poster_path).slice(0, 10).map((movie) => (
                    <Upcoming key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    </div>
    )

}