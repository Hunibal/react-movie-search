import React from "react"

export default function Rating({ ratingAverage }) {

    const rating = ratingAverage.toFixed(1)
    const getRatingColor = (rating) => {
        if (rating < 3) {
          return "red";
        } else if (rating >= 3 && rating < 5) {
          return "orange";
        } else if (rating >= 5 && rating < 7) {
          return "yellow";
        } else if (rating >= 7 && rating < 8) {
          return "green";
        } else if (rating >= 8 && rating <= 10) {
          return "blue";
        }
        return ""; // Default case
      };
    

    if (ratingAverage === undefined || ratingAverage === null) {
        return <p><small>RATING: N/A</small></p>  // Show 'N/A' if no rating is available
    }
    return (
        <>
            <p><small>RATING: </small><span className={`rating ${getRatingColor(rating)}`}>{rating}</span></p>
        </>
    )
}
