import './menuBar.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes,Route, useNavigate, Navigate   } from 'react-router-dom';
 
import AboutUs from '../Pages/aboutus';
import ContactUs from '../Pages/contactUs';
import Help from '../Pages/help';
 

export default function MenuBar(props) {
  const [items, setItems] = useState(props.items);
  const navigate = useNavigate()  
  const menuList = items? items.map((item,index)=>{
    return(
      <div>
          <button onClick={()=>{navigate('/'+item)}} className='container-flex btn btn-primary' id={index}> {item} </button>
      </div>
    )
  }):''

  useEffect(() => {
    // You can directly call setItems in the useEffect to update the state
    setItems(props.items);
     
  }, [props.items]); // Add props.items as a dependency to update the state when it changes
  
  return (
    <div className='container-flex d-flex btn-primary'>
        <h1>hai am sandeep Here </h1>
        {menuList}
    </div>
  );
}
