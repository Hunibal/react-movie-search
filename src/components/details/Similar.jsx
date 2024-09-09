import React from "react";
import { Link } from "react-router-dom";

export default function Similar({ similarMovies }) {
    return (
        <>
            {similarMovies
                .filter((movie) => movie.poster_path) // Filter out movies with undefined poster_path
                .slice(0, 4)
                .map((movie, index) => (
                    <div key={index} className={`similar similar-${index}`}>
                        <Link to={`/search/${movie.id}`} className={"similar--link"}>
                            <img
                                className="similar--image"
                                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                                alt={`${movie.title} poster`} // Corrected the alt text
                            />
                        </Link>
                        <Link to={`/search/${movie.id}`} className={"similar--link"}>
                            <h5 className="similar--title">{movie.title}</h5>
                        </Link>
                    </div>
                ))}
        </>
    );
}