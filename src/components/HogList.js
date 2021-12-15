import React from "react"
import HogCard from "./HogCard"

function HogList ({ hogs }) {
    return(
        <div className="ui grid container">
            {hogs.map(hog => (
                <HogCard hog={hog} key={hog.name} />
            ))}
        </div>
    )
}

export default HogList