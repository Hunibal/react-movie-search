import React from "react"

export default function Genre({ genres }) {

    return (
        <div className="genre">
            <small>Genre:</small>
            <p className="detail--parameter">{genres.map((genre, index) => (
                genre.name
            )).join(', ')}</p>
        </div>
    )
}