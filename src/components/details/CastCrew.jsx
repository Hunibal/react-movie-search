import React from "react"
import CastList from "../CastList"

export default function CastCrew({ cast }) {

    function findCrewByJob(credits, jobTitle) {
        return credits.crew.filter((crewMember) => crewMember.job === jobTitle);
    }

    return (
        <div className="cast-crew">
            <div className="cast">
                <small>Cast:</small>
                <CastList cast={cast.cast} amount={10} />
            </div> 
            <div className="crew-container">
                <div className="director">
                    <small>Directed by:</small>
                    <p className="detail--parameter">
                        {findCrewByJob(cast, "Director").map(
                            (job) => job.name).join(', ')}
                    </p>
                </div>
                <div className="producer">
                    <small>Produced by:</small>
                    <p className="detail--parameter">
                    {findCrewByJob(cast, "Producer").map(
                            (job) => job.name).join(', ')}
                    </p>
                </div>
                <div className="director">
                    <small>Screenplay by:</small>
                    <p className="detail--parameter">
                    {findCrewByJob(cast, "Writer").map(
                            (job) => job.name).join(', ')}
                    </p>
                </div>
            </div>
            
        </div>
    )
}