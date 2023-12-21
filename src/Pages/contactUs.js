import React, { useContext, useEffect, useState } from "react";
import MenuBar from "../components/menuBar";
import { menuContext } from "./home";

export default function ContactUs(){
    const value =  useContext(menuContext)
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        console.log(value,'console.log(value,)')
        setMenu(value)  
    },[value])  
    return(
        <div>
            <h1>Contact us  </h1>
            <MenuBar items={menu} /> 
        </div>
    )
}