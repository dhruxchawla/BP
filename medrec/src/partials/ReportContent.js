import React from 'react'
import reportImg from '../img/reports.jpg'

const ReportContent = () => {
   return (
      <div>
         <img src={reportImg} alt="Something" className="img-fluid rounded mb-3 report-image" id="reportlink" />
         <div className="content">
            <h2>Hospital Name</h2>
            <h3>Doctor Name</h3>
            <p><strong>Date: 01/01/2020</strong></p>

            <h3>Report </h3>
            <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ut sit ab odit incidunt exercitationem cumque voluptatibus quia sint, quaerat id iste aliquam voluptatum.Magnam ducimus omnis repellendus sint, repudiandae ratione.
            </p>
            <p>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.Tenetur quibusdam corrupti tempore expedita aspernatur suscipit eos.Dolorum eos doloribus tempora reprehenderit.Labore possimus, odio repellendus cumque fuga cupiditate cum culpa.
               Deleniti nam optio ipsum, iste commodi nesciunt delectus error suscipit assumenda culpa adipisci eos nobis accusamus, quod ratione amet non atque architecto laborum est et!Nostrum rerum soluta accusantium officia!
               Cumque accusamus voluptatibus maxime ad veniam perferendis dolorem cupiditate culpa ipsum dignissimos hic similique, doloremque earum.Rerum dolores hic doloribus amet.Quibusdam a iure possimus doloribus unde repellendus accusantium dolorum.
               Officiis, fuga!Corporis culpa porro dolore accusamus ratione quod necessitatibus numquam eligendi, alias molestias doloribus laborum earum.Recusandae voluptatem mollitia velit, cum tenetur vero!Eius earum consequuntur tempora corrupti illum.
               Quibusdam eveniet voluptatem culpa nulla id ipsa, excepturi ad sed ipsam dignissimos neque, reiciendis iure voluptatum!Dolor nam repellat animi a numquam fuga dolores, eveniet, quas, atque ipsum qui dicta?
            </p>

            <h3>Medication</h3>
            <ol className="medicines">
               <li>Paracetamol</li>
               <li>Disprin</li>
               <li>Liv-52</li>
            </ol>

            <h4>Documents </h4>
            <p>**uploaded Documents</p>
         </div>
      </div>
   )
}

export default ReportContent
