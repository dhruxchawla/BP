import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import ReportItem from './ReportItem';
import SideProfile from './SideProfile';
import ReportContext from '../context/reports/ReportContext';
import { useHistory } from 'react-router-dom';

const BodyContent = () => {
   const context = useContext(ReportContext);
   const { reports, getReports, editReport } = context;
   const [report, setReport] = useState({ id: "", ereportNo: "", edescription: "", emedication: ""});

   let history = useHistory();
   useEffect(() => {
      if(localStorage.getItem('token')){
         getReports()
      } else {
         history.push('/login')
      }
      // eslint-disable-next-line
   }, [])

   const updateReport = (currentReport) => {
      ref.current.click();
      setReport({id: currentReport._id, ereportNo: currentReport.reportNo, edescription: currentReport.description, emedication: currentReport.medication} );
   }
   const ref = useRef(null)
   const refClose = useRef(null)

   const handleClick = (e) => {
      e.preventDefault();
      editReport(report.id, report.ereportNo, report.edescription, report.emedication)
      refClose.current.click();
   }

   const onChange = (e) => {
      setReport({ ...report, [e.target.name]: e.target.value })
   }
   return (
      <div>
         <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                           <input type="text" className="form-control" name="ereportNo" placeholder="Report Number" value={report.ereportNo} onChange={onChange} required />
                        </div>
                        <div className="mb-3">
                           <input type="datetime-local" className="form-control" name="edate" placeholder="Date &amp; Time" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                           <textarea name="edescription" className="form-control" id="report" rows="6" placeholder="Report" minLength={5}  value={report.edescription} onChange={onChange} required></textarea>
                        </div>
                        <div className="mb-3">
                           <textarea name="emedication" className="form-control" id="medication" rows="3" placeholder="Medication" minLength={5} value={report.emedication} onChange={onChange} required></textarea>
                        </div>
                        <div className="mb-3">
                           <input type="file" className="form-control" name="edocument" placeholder="Upload Documents" />
                        </div>
                     </form>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
                     <button type="button" disabled={report.edescription.length<5 || report.emedication.length<5}  className="btn btn-primary" onClick={handleClick}>Update report</button>
                  </div>
               </div>
            </div>
         </div>
         <section className="body-content " id="reportslink">
            <div className="container mt-4">
               <div className="row">
                  <div className="col-lg-8 col-md-8 d-flex justify-space-between">
                     <div className="p-2 flex-fill bd-highlight ps-0">
                        <h5 className="pt-2">Search Report By Report Number</h5>
                     </div>
                     <form className="p-2 d-flex flex-fill bd-highlight">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                     </form>
                  </div>
                  <div className="p-2 col-lg-4 col-md-4 d-grid">
                     <Link className="btn btn-primary" to="/addReport" role="button">Add New Report</Link>
                  </div>
               </div>
            </div>
            <div className="container mt-3">
               <div className="row">
                  <div className="col-lg-8 col-md-8">
                     {reports.length===0 && <h2 className="text-center my-4">No Reports to Display</h2>}
                     {reports.map((report) => {
                        return <ReportItem key={report._id} updateReport={updateReport} report={report} />
                     })}
                  </div>
                  <div className="col-lg-4 col-md-4 mb-5">
                     <SideProfile />
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default BodyContent
