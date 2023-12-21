import logo from './logo.svg';
import './App.css';
import Home, { menuContext } from './Pages/home';
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import AboutUs from './Pages/aboutus';
import ContactUs from './Pages/contactUs';
import Help from './Pages/help';
function App() {
  return (
    <div className="App">
     testing Starts here 
     
   
     <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/Contact' element={<ContactUs />} />
              <Route path='/Help' element={<Help />} />
              <Route path='/home' element={<Home />} />
          </Routes>
    </Router>

     
    </div>
  );
}

export default App;
