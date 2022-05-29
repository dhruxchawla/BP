import React from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";

const Navbar = () => {
   let location = useLocation();
   let history = useHistory();

   const handleLogout = () => {
      localStorage.removeItem('token');
      history.push('/login');
   }
   return (
      <div>
         <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light my_nav">
            <div className="container-fluid">
               <Link className="navbar-brand" to="/">BP</Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
               
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {!localStorage.getItem('token') ?
                     <li className="nav-item">
                        
                      
                     </li>
                     :
                     <li className="nav-item">
                       <Link className={`nav-link ${location.pathname==="/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                      
                     </li>
                  }             
                  </ul>
                  
                  {!localStorage.getItem('token') ?
                  <form className="d-flex">
                     <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                     <Link className="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>
                  </form>
                  :
                  <button onClick={handleLogout} className="btn btn-primary">Logout</button>
                  }
               </div>
            </div>
         </nav>
      </div>
   )
}

export default Navbar
