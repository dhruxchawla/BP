import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import reports from '../img/reports.jpg'
import ReportContext from '../context/reports/ReportContext';

const ReportItem = (props) => {
   const context = useContext(ReportContext);
   const { deleteReport } = context;
   const { report, updateReport } = props;
   return (
      <div>
         <div className="list-group">
            <div className="date-info d-flex align-items-center my-2">
               <p className="text-muted flex-grow-1 mb-0">{report.date}</p>
               <i className="far fa-edit mx-2" onClick={() => {updateReport(report)}}></i>
               <i className="fas fa-trash-alt mx-2" onClick={() => {deleteReport(report._id)}}></i>
            </div>
            <Link to="/report" className="list-group-item mb-3">
               <div className="row">
                  <div className="col-lg-3 col-md-3">
                     <img src={reports} alt="" className="img-fluid rounded" />
                  </div>
                  <div className="col-lg-9 col-md-9">
                     <h2>{report.reportNo}</h2>
                     <h3>{report.description}</h3>
                     <p>{report.medication}</p>
                  </div>
               </div>
            </Link>
         </div>
      </div>
   )
}

export default ReportItem
