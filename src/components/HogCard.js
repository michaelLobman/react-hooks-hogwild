import React, { useState } from "react"
import HogDetails from "./HogDetails"

function HogCard ({ hog }) {

    const { name, specialty, image } = hog

    const [showDetails, setShowDetails] = useState(false)



    return (

        <div className="ui eight wide column">
            <img src={image} width="200px" alt="hogPic" />
            <div>
                <h3>{name}</h3>
                <div>Specialty: {specialty}</div>
            </div>
            <button onClick={() => setShowDetails(!showDetails)}>Show Details</button>
            <div>
                {showDetails ? <HogDetails hog={hog} /> : null}
            </div>
        </div>
    )
}

export default HogCard