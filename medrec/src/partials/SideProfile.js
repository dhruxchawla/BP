import React, { useEffect, useState } from 'react';
import { useHistory} from 'react-router-dom';
import profileIcon from '../img/profile-icon.jpg'

const SideProfile = () => {
   let history = useHistory();

   const initialData = {}
   const [data, setData] = useState(initialData);
   
   useEffect(() => {
      if(localStorage.getItem('token')){
         getUser()
      } else {
         history.push('/login')
      }
      // eslint-disable-next-line
   }, [])

   const getUser = async () => {
      const response = await fetch(`http://localhost:5000/api/auth/getUser`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
         }
      });
      const user = await response.json();
      setData(user);
   }

   const { name, age, gender, phone, bloodGrp } = data;
   return (
      <div>
         <aside className="card">
            <div className="card-body">
               <div className="card-title">
                  <h4 style={{ fontSize: "2.2rem" }}>Profile</h4>
               </div>
               <div className="row">
                  <div className="col-12">
                     <img className="patient-pic" src={profileIcon} alt="Pateint pic" />
                  </div>
                  <div className="col-12">
                     <div className="card border-0">
                        <div className="card-body profile-body mt-2">
                           <div className="list-group border-0">
                              <div className="list-group-item border-bottom-0 pb-3">
                                 <h5 className="inline">Name : &nbsp;</h5>
                                 <p className="inline">{name}</p>
                              </div>
                              <div className="list-group-item border-bottom-0 pb-3">
                                 <h5 className="inline">Age : &nbsp;</h5>
                                 <p className="inline">{age}</p>
                              </div>
                              <div className="list-group-item border-bottom-0 pb-3">
                                 <h5 className="inline">Gender : &nbsp;</h5>
                                 <p className="inline">{gender}</p>
                              </div>
                              <div className="list-group-item border-bottom-0 pb-3">
                                 <h5 className="inline">Blood Group : &nbsp;</h5>
                                 <p className="inline">{bloodGrp}</p>
                              </div>
                              <div className="list-group-item pb-3">
                                 <h5 className="inline">Phone Number : &nbsp;</h5>
                                 <p className="inline">+91 {phone}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </aside>
      </div>
   )
}

export default SideProfile
