import React from "react"


export const LocationCard = ({location}) => (
    <section className="location">
        <h2>Locations</h2>
        <h3 className="location__name">Address: {location.address}</h3>
        <div className="location__squareFootage">SquareFootage: {location.squareFootage}</div>
        <div className="location__accessibility">Wheelchair Accessible: {location.handicap ? "Yes" : "No"}</div>
    </section>
)