import { React } from "react"
import { Route } from "react-router-dom"


import { LocationProvider } from "./Locations/LocationProvider"
import { LocationList } from "./Locations/LocationList"

export const ApplicationViews = () => {
    return (
        <>
        
        <LocationProvider>
        <Route exact path="/">
            <LocationList />
        </Route>
        </LocationProvider>

        </>
    )
}