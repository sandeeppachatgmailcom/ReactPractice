import React from "react";
import MenuBar from "../components/menuBar";

export default function Help(){
    return(
        <div>
            <h1>Help us</h1>
            <MenuBar items={ ['home','aboutus','contact','help']} />
        </div>
    )
}