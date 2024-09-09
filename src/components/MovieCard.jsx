import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Rating from "./Rating"
import CastList from "./CastList"

export default function MovieCard({ movie }) {

    const [ movieCast, setMovieCast ] = useState([])

    useEffect(() => {
        async function getCast() {
            const results = `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`
            try {
                const res = await fetch(results)
                const data = await res.json()
                setMovieCast(data.cast)

            } catch (err) {
                console.error(err)
            }
        }
        getCast()

    },[])

    return (
            <div className={`card card-multi movie-${movie.id}`} key={movie.id}>
                <div className="card--content--wrapper">
                    <Link to={`/search/${movie.id}`} state={{ movieId:movie.id }} className={"card--image--wrapper"}>
                    <img className="card--image"
                         src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                         alt={movie.title + ' poster'}
                         />
                    </Link>
                    <div className="card--content">
                        <div className="title--wrapper">
                            <div className="title--container">
                                <Link to={`/search/${movie.id}`} className={"card--title--link"} 
                                    state={{ movie:movie, 
                                             movieCast:movieCast
                                    }}>
                                    <h3 className="card--title">{movie.title}</h3>
                                </Link>
                                <h3 className="card--tagline">{movie.tagline}</h3>
                            </div>
                            <Rating ratingAverage={movie.vote_average} />
                        </div>
                        <p className="card--desc">{movie.overview}</p>
                        <div className="card--footer">
                            <div className="release-date">
                                <small>Release Date:</small>
                                <p className="detail--parameter">{movie.release_date}</p>
                            </div> 
                            <div className="genre">
                                <small>Genre:</small>
                                <p className="detail--parameter">{movie.genreNames.join(', ')}</p>
                            </div>
                            <div className="cast-excerpt">
                                <small>Cast:</small>
                                <CastList cast={movieCast} amount={5} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}