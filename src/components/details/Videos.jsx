import React from "react"

export default function Videos({ videos }) {
    console.log(videos)

    return(
        <>
        {videos.slice(0, 4).map((video, index) =>(
            <div key={index} className={`video video-${index}`} >
                <iframe
                        width="180"
                        height="120"
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                <h5 className="video--title">{video.name}</h5>
            </div>
        ))}
        </>
    )
}