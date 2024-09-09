import React from "react"
import Rating from "./Rating"
import Videos from "./details/Videos"
import Similar from "./details/Similar"
import Details from "./details/Details"
import CastCrew from "./details/CastCrew"
import Production from "./details/Production"

export default function MovieDetailsCard({ movieDetails }) {
    console.log(movieDetails)
    const voteAverage = movieDetails.vote_average

    function formatDate(dateString) {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }

    return (
        <div className={`card card-single movie-${movieDetails.id}`}>
                <div className="card--content--wrapper">
                    <img className="card--image"
                         src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movieDetails.poster_path}`}
                         alt={movieDetails.title + ' poster'}
                         />
                    <div className="card--content">
                        <div className="title--wrapper">
                            <div className="title--container">
                                <h3 className="card--title">{movieDetails.title}</h3>
                                <h3 className="card--tagline">{movieDetails.tagline}</h3>
                            </div>
                            <Rating ratingAverage={voteAverage} />
                        </div>
                        <p className="card--desc">{movieDetails.overview}</p>
                    </div>
                </div>
                <div className="details--wrapper">
                    <h3 className="details--title">Movie Details</h3>
                    <div className="details--container">
                        <Details movieDetails={movieDetails} formatDate={formatDate} />
                    </div>
                </div>
                <div className="production--wrapper">
                    <h3 className="details--title">Production Details</h3>
                    <div className="production--container">
                        <Production movieDetails={movieDetails} />
                    </div>
                </div>
                <div className="cast--wrapper">
                    <h3 className="details--title">Cast & Crew</h3>
                    <div className="cast--container">
                        <CastCrew cast={movieDetails.credits} />
                    </div>
                </div>
                <div className="videos--wrapper">
                    <h3 className="details--title">Related Videos</h3>
                    <div className="videos--container">
                        <Videos videos={movieDetails.videos.results} />
                    </div>
                </div>
                <div className="similar--wrapper">
                    <h3 className="details--title">Similar Movies</h3>
                    <div className="similar--container">
                        <Similar similarMovies={movieDetails.similar.results} />
                    </div>
                </div>


            </div>
    )
}