import React, { useState } from "react";

export default function GrandChild(props){
    const [value,setValue] = useState(props.value)
    return(
        <div>
            <h5>{value*90}</h5>
        </div>
    )
}
