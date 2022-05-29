import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import reports from '../img/reports.jpg'
import BillContext from '../context/bills/BillContext'

const BillItem = (props) => {
   const context = useContext(BillContext);
   const { deleteBill } = context;
   const { bill, updateBill } = props;
   return (
      <div>
         <div className="list-group">
            <div className="date-info d-flex align-items-center my-2">
               <p className="text-muted flex-grow-1 mb-0">{bill.date}</p>
               <i className="far fa-edit mx-2" onClick={() => {updateBill(bill)}}></i>
               <i className="fas fa-trash-alt mx-2" onClick={() => {deleteBill(bill._id)}}></i>
            </div>
            <Link to="/report" className="list-group-item mb-3">
               <div className="row">
                  <div className="col-lg-3 col-md-3">
                     <img src={reports} alt="" className="img-fluid rounded" />
                  </div>
                  <div className="col-lg-9 col-md-9">
                     <h2>{bill.reportNo}</h2>
                     <h3>{bill.description}</h3>
                     <p>{bill.medication}</p>
                  </div>
               </div>
            </Link>
         </div>
      </div>
   )
}

export default BillItem
