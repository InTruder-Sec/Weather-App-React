import React from "react";

function getCurrentLoc() {
    console.log("Mumbai, India");
}

function returnLocation() {
    return (
        <div className="location">
            Mumbai, India
        </div>
    )
}

function CurrentLoc() {
    const getLocation = getCurrentLoc(returnLocation);
    return (
        {getLocation}
    )
}

export default CurrentLoc;