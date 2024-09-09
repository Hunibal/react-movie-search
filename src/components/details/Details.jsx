import React from "react"

import Genre from "./Genre"

export default function Details({ movieDetails, formatDate }) {

    return (
        <div className="movie--details">
            <div className="release-date">
                <small>Release Date:</small>
                <p className="detail--parameter">{formatDate(movieDetails.release_date)}</p>
            </div> 
            <Genre genres={movieDetails.genres} />
            <div className="original-language">
                <small>Original Language:</small>
                <p className="detail--parameter">{movieDetails.original_language}</p>
            </div>
            <div className="runtime">
                <small>Runtime:</small>
                <p className="detail--parameter">{movieDetails.runtime} mins</p>
            </div>
        </div>
    )
}