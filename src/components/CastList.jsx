import React from "react"

export default function CastList ({ cast, amount }) {

        // Extract the first 5 values of the "value" key
        const castList = cast.slice(0, amount).map(actor => actor.name)

        
    
    return(
        <>
            <p className="detail--parameter">{castList.join(', ')}</p>
        </>
    )
}