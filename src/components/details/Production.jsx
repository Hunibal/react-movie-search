import React from "react"

export default function Production ({ movieDetails }) {
    return (
        <div className="production--details">
            <div className="production-companies">
                <small>Production Companies:</small>
                <p className="detail--parameter">{movieDetails.production_companies.map((company) =>(
                    company.name
                )).join(', ')}</p>
            </div> 
            <div className="production-countries">
                <small>Production Countries:</small>
                <p className="detail--parameter">{movieDetails.production_countries.map((country) =>(
                    country.name
                )).join(', ')}</p>
            </div>
            <div className="production-budget">
                <small>Production Budget:</small>
                <p className="detail--parameter">{movieDetails.budget}</p>
            </div>
            <div className="production-revenue">
                <small>Movie Revenue:</small>
                <p className="detail--parameter">{movieDetails.revenue}</p>
            </div>
        </div>
    )
}