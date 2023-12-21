
import React, { useEffect, useState } from "react";
import Child from "./secondChild";
function ContextSample (props){
    const [value,setValue] = useState(props.value)
     return(
        <div>
            <h1>{value}</h1>
            <Child me= {value*2}/>
        </div>
     )
}

export default ContextSample;