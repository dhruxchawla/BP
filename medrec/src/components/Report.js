import React from 'react'
import ReportContent from '../partials/ReportContent'
import SideProfile from '../partials/SideProfile'

const Report = () => {
   return (
      <div>
      <section className="body-content">
         <div className="container mt-5 mb-5">
            <div className="row">
               <div className="col-lg-8 col-md-8">
                  <ReportContent />
               </div>
               <div className="col-lg-4 col-md-4">
                  <SideProfile />
               </div>
            </div>
         </div>
      </section>
   </div>
   )
}

export default Report
