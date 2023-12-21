import './home.css'
import React, { createContext, useContext, useState } from 'react'
import Header from '../components/header';
import MenuBar from '../components/menuBar';
import ContextSample from '../components/contextSample';
import { useNavigate } from 'react-router';
import ContactUs from './contactUs';
export const userContext = createContext()
export const menuContext = createContext()


function Home(){
    const value = useContext(menuContext)
    const [menu,setMenu] = useState(value )    
    
     
    return(
        <div>
            <h1>Home Page</h1>
            <userContext.Provider value={20} >
                <MenuBar items={menu } />
                <ContextSample value={20}/>
            </userContext.Provider>
            
            
        </div>
    )
}

export default Home;