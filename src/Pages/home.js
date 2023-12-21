import './home.css'
import React, { createContext } from 'react'
import Header from '../components/header';
import MenuBar from '../components/menuBar';
import ContextSample from '../components/contextSample';
export const userContext = createContext()


function Home(){
    
    return(
        <div>
            <h1>Home Page</h1>
            <userContext.Provider value={20} >
            <MenuBar items={ ['home','about us','contact','help']} />
            <ContextSample value={20}/>
            </userContext.Provider>
            
            
        </div>
    )
}

export default Home;