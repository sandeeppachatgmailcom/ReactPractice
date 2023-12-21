import './menuBar.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes,Route,useNavigate  } from 'react-router-dom';
import AboutUs from '../Pages/aboutus';
import ContactUs from '../Pages/contactUs';
import Help from '../Pages/help';
 

export default function MenuBar(props) {
  const [items, setItems] = useState(props.items);
  const navigate  = useNavigate()
  useEffect(() => {
    // You can directly call setItems in the useEffect to update the state
    setItems(props.items);
  }, [props.items]); // Add props.items as a dependency to update the state when it changes
  const handleButtonClick = (path) => {
    navigate(path);
  };
  return (
    <div className='container-flex d-flex btn-primary'>
       <Router>
        <Routes>
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/Help' element={<Help />} />
          {/* Add other routes as needed */}
        </Routes>
        <button className='btn btn-primary' onClick={() => handleButtonClick('/about')}>About Us</button>
     
      </Router>
    </div>
  );
}
