import React from 'react'

export default function Defaultprops({name="New User"}){
    return(
        <div>
            <h1>Default Props</h1>
            <h2>Hi, {name}</h2>
        </div>
    )
}