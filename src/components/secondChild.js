import React, {  useContext, useState } from "react";
import { userContext } from "../Pages/home";



function Child (){
    const  value  = useContext(userContext)
    return(
        <div>
           <h5>{value*90*2}</h5>
        </div>
    )
}

export default Child;
