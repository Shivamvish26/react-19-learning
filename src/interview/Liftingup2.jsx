import React from "react";

export default function Liftingup2 ({name}){
    return(
        <div>
            <h3>Hello, {name || "Admin"}</h3>
        </div>
    )
}