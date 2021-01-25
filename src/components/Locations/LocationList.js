import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"


export const LocationList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
      getLocations()
}, [])
    



  return (
    <div className="locationList">
    
      {
        locations.map(place => {
          return <LocationCard key={place.id} location={place} />
        })
      }
    </div>
  )
}