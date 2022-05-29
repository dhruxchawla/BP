import React, { useContext,useState } from 'react'
import { useHistory } from 'react-router-dom';
import ReportContext from '../context/reports/ReportContext';

const AddReport = () => {
   let history = useHistory();

   const context = useContext(ReportContext);
   const { addReport } = context;

   const [report, setReport] = useState({ reportNo: "", description: "", medication: ""});

   const handleAddReport = (e) => {
      e.preventDefault();
      addReport(report.reportNo, report.description, report.medication)
      setReport({reportNo: "", description: "", medication: ""})
      history.push("/");
   }

   const onChange = (e) => {
      setReport({ ...report, [e.target.name]: e.target.value })
   }
   return (
      <div>
         <div className="container mt-4" style={{minHeight: "90vh"}}>
            <div className="card mb-5 mx-auto bx" style={{ maxWidth: "60%" }}>
               <div className="card-body">
                  <div className="card-title mb-3">
                     <h4>Add Patient Details</h4>
                  </div>
                  <form onSubmit={handleAddReport}>
                     <div className="mb-3">
                        <input type="text" className="form-control" name="reportNo" value={report.reportNo} placeholder="Report Number" onChange={onChange} required/>
                     </div>
                     <div className="mb-3">
                        <input type="date" className="form-control" name="date" placeholder="Date &amp; Time" onChange={onChange} />
                     </div>
                     <div className="mb-3">
                        <textarea name="description" minLength={5}  className="form-control" id="report" rows="6" value={report.description} placeholder="Report" onChange={onChange} required></textarea>
                     </div>
                     <div className="mb-3">
                        <textarea name="medication" minLength={5}  className="form-control" id="medication" rows="3" value={report.medication} placeholder="Medication" onChange={onChange} required></textarea>
                     </div>
                     <div className="mb-3">
                        <input type="file" className="form-control" name="document" placeholder="Upload Documents" />
                     </div>
                     <div className="text-center d-grid">
                        <button disabled={report.description.length<5 || report.medication.length<5} type="submit" className="btn btn-success">Upload Details</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AddReport
