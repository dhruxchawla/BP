import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = () => {
   const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword:"" , gender: "Gender", age: "", bloodGrp: "", aadharNo: "", phone: ""});
   let history = useHistory();

   const handleSignup = async (e) => {
      // api call
      e.preventDefault();
      const {name, email, password, gender, age, bloodGrp, aadharNo, phone} = credentials;
      const response = await fetch("http://localhost:5000/api/auth/createUser", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({name, email, password, gender, age, bloodGrp, aadharNo, phone})
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
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
   }
   return (
      <div>
         <div className="container my-4" style={{minHeight: "90vh"}}>
            <div className="card mb-5 mx-auto bx" id="patient" style={{ maxWidth: "60%" }}>
               <div className="card-body">
                  <div className="card-title mb-3">
                     <h4>Sign Up</h4>
                     <p className="card-text text-muted">Fill In your details to Singup</p>
                  </div>
                  <form onSubmit={handleSignup}>
                     <div className="mb-3">
                        <input type="text" className="form-control" name="name" placeholder="Name" onChange={onChange} />
                     </div>
                     <div className="mb-3">
                        <input type="email" className="form-control" name="email" placeholder="Email" onChange={onChange} />
                     </div>
                     <div className="mb-3">
                        <input type="number" className="form-control" name="age" placeholder="Age" onChange={onChange} />
                     </div>
                     <div className="mb-3">
                        <select className="form-select" name="gender" defaultValue={'DEFAULT'}>
                           <option value="DEFAULT">Gender</option>
                           <option value="male">Male</option>
                           <option value="female">Female</option>
                           <option value="ratherNotSay">Rather Not Say</option>
                        </select>
                     </div>
                     <div className="mb-3">
                        <input type="text" className="form-control" name="bloodGrp" placeholder="Blood Group" onChange={onChange} />
                     </div>
                     <div className="mb-3">
                        <input type="number" className="form-control" minLength={12} name="aadharNo" placeholder="Aadhar Card Number" onChange={onChange} />
                     </div>
                     <div className="mb-3">
                        <input type="tel" className="form-control" name="phone" minLength={10} onChange={onChange} placeholder="Phone Number" />
                     </div>
                     <div className="mb-3">
                        <input type="password" className="form-control" name="password" minLength={5} onChange={onChange} placeholder="Password (Min Length 5)" />
                     </div>
                     <div className="mb-3">
                        <input type="password" className="form-control" name="cpassword" minLength={5} onChange={onChange} placeholder="Confirm Password" />
                     </div>
                     <div className="text-center d-grid">
                        <button type="submit" className="btn btn-success">Sign Up</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Signup
