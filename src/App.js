import './App.css';
import Navbar from './components/Navbar/Navber';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Home from "./components/Router/Home"
import About from "./components/Router/About"
import Service from "./components/Router/Service"
import Contact from "./components/Router/Contact"
import Login from "./components/Router/Login"
import SignUp from "./components/Router/SignUp"
import Cart from "./components/Router/Cart"
import Views from './components/ViewProduct';
// import DonTee from './components/dontee';

function App() {

  return (

    <div className="App">
       <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/service" element={<Service/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/view/:id" element={<Views />} />
  
  
       </Routes>
       </BrowserRouter>
     </div>
  
  
  );
}



export default App;
