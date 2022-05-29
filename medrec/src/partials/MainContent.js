import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import BillItem from './BillItem';
import SideProfile from './SideProfile';
import BillContext from '../context/bills/BillContext';
import { useHistory } from 'react-router-dom';

const MainContent = () => {
   const context = useContext(BillContext);
   const { reports, getReports } = context;
   console.log(reports);
   // const {bills, getBills, editBill } = context;
   // console.log(bills,getBills,editBill);
   // const { bills, getBills, editBill } = context;
   // const [bill, setBill] = useState({ id: "", ereportNo: "", edescription: "", emedication: ""});

   // let history = useHistory();
   // useEffect(() => {
   //    if(localStorage.getItem('token')){
   //       getBills()
   //    } else {
   //       history.push('/login')
   //    }
   //    // eslint-disable-next-line
   // }, [])

   // const updateBill = (currentBill) => {
   //    ref.current.click();
   //    setBill({id: currentBill._id, ereportNo: currentBill.reportNo, edescription: currentBill.description, emedication: currentBill.medication} );
   // }
   // const ref = useRef(null)
   // const refClose = useRef(null)

   // const handleClick = (e) => {
   //    e.preventDefault();
   //    editBill(bill.id, bill.ereportNo, bill.edescription, bill.emedication)
   //    refClose.current.click();
   // }

   // const onChange = (e) => {
   //    setBill({ ...bill, [e.target.name]: e.target.value })
   // }
   return (
      <div>
         {/* <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
         </button>
         <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLabel">Edit Report</h5>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                     <form onSubmit={handleClick}>
                        <div className="mb-3">
                           <input type="text" className="form-control" name="ereportNo" placeholder="Report Number" value={bill.ereportNo} onChange={onChange} required />
                        </div>
                        <div className="mb-3">
                           <input type="datetime-local" className="form-control" name="edate" placeholder="Date &amp; Time" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                           <textarea name="edescription" className="form-control" id="report" rows="6" placeholder="Report" minLength={5}  value={bill.edescription} onChange={onChange} required></textarea>
                        </div>
                        <div className="mb-3">
                           <textarea name="emedication" className="form-control" id="medication" rows="3" placeholder="Medication" minLength={5} value={bill.emedication} onChange={onChange} required></textarea>
                        </div>
                        <div className="mb-3">
                           <input type="file" className="form-control" name="edocument" placeholder="Upload Documents" />
                        </div>
                     </form>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
                     <button type="button" disabled={bill.edescription.length<5 || bill.emedication.length<5}  className="btn btn-primary" onClick={handleClick}>Update report</button>
                  </div>
               </div>
            </div>
         </div>
         <section className="body-content " id="reportslink">
            <div className="container mt-4">
               <div className="row">
                  <div className="col-lg-8 col-md-8 d-flex justify-space-between">
                     <div className="p-2 flex-fill bd-highlight ps-0">
                        <h5 className="pt-2">Search Bill By Bill Number</h5>
                     </div>
                     <form className="p-2 d-flex flex-fill bd-highlight">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                     </form>
                  </div>
                  <div className="p-2 col-lg-4 col-md-4 d-grid">
                     <Link className="btn btn-primary" to="/addBill" role="button">Add New Bill</Link>
                  </div>
               </div>
            </div>
            <div className="container mt-3">
               <div className="row">
                  <div className="col-lg-8 col-md-8">
                     {bills.length===0 && <h2 className="text-center my-4">No Reports to Display</h2>}
                     {bills.map((bill) => {
                        return <BillItem key={bill._id} updateBill={updateBill} bill={bill} />
                     })}
                  </div>
                  <div className="col-lg-4 col-md-4 mb-5">
                     <SideProfile />
                  </div>
               </div>
            </div>
         </section> */}
      </div>
   )
}

export default MainContent
