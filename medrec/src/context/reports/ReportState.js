import { useState } from "react";
import ReportContext from "./ReportContext";

const ReportState = (props) => {
   const host = "http://localhost:5000";

   const reportsInitial = []
   const [reports, setReports] = useState(reportsInitial)


   // Get all Reports
   const getReports = async () => {
      const response = await fetch(`${host}/api/report/fetchAllReports`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
         }
      });
      const json = await response.json();
      // console.log(json)
      setReports(json)
   }

   // Add a Report
   const addReport = async (reportNo, description, medication) => {
      // api call
      const response = await fetch(`${host}/api/report/addReport`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
         },
         body: JSON.stringify({reportNo, description, medication})
      });
      const report = await response.json();
      setReports(reports.concat(report))
   }
   
   // Delete a Report
   const deleteReport = async (id) => {
      // api call
      const response = await fetch(`${host}/api/report/deleteReport/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
         },
      });
      const json = response.json();
      console.log(json)

      const newReports = reports.filter((report) => { return report._id !== id });
      setReports(newReports)
   }

   // Edit a Report
   const editReport = async (id, reportNo, description, medication) => {
      // api call
      const response = await fetch(`${host}/api/report/updateReport/${id}`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
         },
         body: JSON.stringify({reportNo, description, medication})
      });
      const json = await response.json();
      console.log(json)

      let newReports = JSON.parse(JSON.stringify(reports));
      for (let index = 0; index < newReports.length; index++) {
         const element = newReports[index];
         if (element._id === id) {
            newReports[index].reportNo = reportNo;
            newReports[index].description = description;
            newReports[index].medication = medication
            break;
         }
      }
      setReports(newReports);
   }

   return (
      <ReportContext.Provider value={{ reports, setReports, addReport, deleteReport, editReport, getReports }}>
         {props.children}
      </ReportContext.Provider>
   )
}
export default ReportState