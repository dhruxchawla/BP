import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
   const [credentials, setCredentials] = useState({email: "", password: ""});
   let history = useHistory();

   const handleLogin = async (e) => {
      e.preventDefault();
      // api call
      const response = await fetch("http://localhost:5000/api/auth/login", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({email: credentials.email, password: credentials.password})
      });
      const json = await response.json();
      // console.log(json);
      if(json.success){
         // save the auth token and redirect
         localStorage.setItem('token', json.authToken);
         history.push("/");
      } else {
         alert('invalid credentials')
      }
   }

   const onChange = (e) => {
      setCredentials({...credentials, [e.target.name]: e.target.value})
   }

   return (
      <div className="container align-items-center" style={{minHeight: "90vh"}}>
         <div className="row mt-5">
            <div className="col-lg-5 col-md-5">
               <div className="card bx">
                  <div className="card-body">
                     <div className="card-title">
                        <h4>BP</h4>
                        <p className="card-text text-muted">Login with your Patient ID &amp; password</p>
                        <form onSubmit={handleLogin}>
                           <div className="mb-3">
                              <input type="text" className="form-control form-control-lg" name="email" value={credentials.email} placeholder="Patient ID" onChange={onChange}/>
                           </div>
                           <div className="mb-3">
                              <input type="password" className="form-control form-control-lg" name="password" value={credentials.password} placeholder="Password" onChange={onChange}/>
                           </div>
                           <div className="mb-3">
                              <button type="submit" className="btn btn-success">Sign in</button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-7 col-md-7 mt-5">
               <div className="card info border-0">
                  <div className="card-body">
                     <div className="card-title">
                        <h4 className="info-title">Designed For Everyone</h4>
                        <p className="card-text text-muted">
                           BP is an digital medical records and bills keeper. You dont have to worry about losing or maintaining all your prescriptions and reports
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <h1 className='mt'>Bills and Prescriptions</h1>
         </div>
      </div>
   )
}

export default Login

