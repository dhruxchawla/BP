import React from 'react'
import '../css/index.css'
import { useHistory } from "react-router-dom";
import BodyContent from './BodyContent';
import Home from '../components/Home';
const AllContent = () => {
  const history = useHistory();

  const navigateaddP = () => {
    // 👇️ navigate to ADD PRESCRIPTIONS
    history.push('/addP');
  };

  const navigateaddB = () => {
    // 👇️ navigate to ADD BILLS
    history.push('/addB');
  };
  return (
    <>
    <div className="col-lg ac">
               <div className="card info border-0">
                  <div className="card-body">
                     <div className="card-title">
                     <h4 className="info-title">Upload here</h4>
                     <div className='btt'>
                     <button type="button" onClick={navigateaddP} className="btnitem btn btn-outline-success">Prescriptions</button>
                     <button type="button" onClick={navigateaddB} className="btnitem btn btn-outline-danger">Bills</button>  
                     </div>
                     <div>
                      <h1 className='mt'>Bills and Prescriptions</h1>
                      </div>
                        <p className="card-text text-muted">
                           BP is an digital medical records and bills keeper. You dont have to worry about losing or maintaining all your prescriptions and reports
                        </p>
                     </div>
                  </div>
               </div>
    </div>
    </>
  )
}

export default AllContent