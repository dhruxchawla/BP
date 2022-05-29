import { useState } from "react";
import ReportContext from "../reports/ReportContext";

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

   // // Add a Bill
   // const addBill = async (reportNo, description, medication) => {
   //    // api call
   //    const response = await fetch(`${host}/api/report/addBill`, {
   //       method: 'POST',
   //       headers: {
   //          'Content-Type': 'application/json',
   //          'auth-token': localStorage.getItem('token')
   //       },
   //       body: JSON.stringify({reportNo, description, medication})
   //    });
   //    const bill = await response.json();
   //    setBills(bills.concat(bill))
   // }
   
   // // Delete a Bill
   // const deleteBill = async (id) => {
   //    // api call
   //    const response = await fetch(`${host}/api/bill/deleteBill/${id}`, {
   //       method: 'DELETE',
   //       headers: {
   //          'Content-Type': 'application/json',
   //          'auth-token': localStorage.getItem('token')
   //       },
   //    });
   //    const json = response.json();
   //    console.log(json)

   //    const newBills = bills.filter((bill) => { return bill._id !== id });
   //    setBills(newBills)
   // }

   // // Edit a Bill
   // const editBill = async (id, reportNo, description, medication) => {
   //    // api call
   //    const response = await fetch(`${host}/api/bill/updateBill/${id}`, {
   //       method: 'PUT',
   //       headers: {
   //          'Content-Type': 'application/json',
   //          'auth-token': localStorage.getItem('token')
   //       },
   //       body: JSON.stringify({reportNo, description, medication})
   //    });
   //    const json = await response.json();
   //    console.log(json)

   //    let newBills = JSON.parse(JSON.stringify(bills));
   //    for (let index = 0; index < newBills.length; index++) {
   //       const element = newBills[index];
   //       if (element._id === id) {
   //          newBills[index].reportNo = reportNo;
   //          newBills[index].description = description;
   //          newBills[index].medication = medication
   //          break;
   //       }
   //    }
   //    setBills(newBills);
   // }

   return (
      <ReportContext.Provider value={{reports,getReports }}>
         {props.children}
      </ReportContext.Provider>
   )
}
export default BillState