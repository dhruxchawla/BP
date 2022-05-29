const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');
const Report = require('../models/Report');
const { body, validationResult } = require('express-validator');

// Route 1 :  Get all the notes: GET "/api/report/fetchAllReports". require Auth
router.get('/fetchAllReports', fetchUser, async (req, res) => {
   try {
      const reports = await Report.find({ user: req.user.id });
      res.json(reports)
   } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
   }
})

// Route 2 :  Add a new Report: POST "/api/report/addReport". require Auth
router.post('/addReport', fetchUser, [
   body('reportNo', 'Enter a valid Number').isInt(),
   body('description', 'Description must be atleast 5 characters.').isLength({ min: 5 }),
   body('medication', 'Medications must be atleast 5 characters.').isLength({ min: 5 }),
], async (req, res) => {
   try {
      const { reportNo, description, medication } = req.body;

      // If there are errors return bad req and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }
      // Creating new Report
      const report = new Report({
         reportNo, description, medication, user: req.user.id
      })
      const savedReport = await report.save()
      res.json(savedReport);

   } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
   }
})

// Route 3 :  Update an existing Report: PUT "/api/report/updateReport". require Auth
router.put('/updateReport/:id', fetchUser, async (req, res) => {
   try {
      const { reportNo, description, medication } = req.body;

      // Creating new Report object
      const newReport = {};
      if(reportNo){newReport.reportNo = reportNo};
      if(description){newReport.description = description};
      if(medication){newReport.medication = medication};
      
      // find the note to be updated and update it
      let report = await Report.findById(req.params.id);
      if(!report){return res.status(404).send("Not Found!")};

      // allow deletion only if user own this note
      if(report.user.toString() !== req.user.id){
         return res.status(401).send("Not Allowed");
      }

      report = await Report.findByIdAndUpdate(req.params.id, {$set: newReport}, {new:true})
      res.json(report)
   } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
   }
})

// Route 4 :  Delete an existing Report: DELETE "/api/report/deleteReport". require Auth
router.delete('/deleteReport/:id', fetchUser, async (req, res) => {
   try {
      // find the note to be deleted and delete it
      let report = await Report.findById(req.params.id);
      if(!report){return res.status(404).send("Not Found!")};

      // allow deletion only if user own this note
      if(report.user.toString() !== req.user.id){
         return res.status(401).send("Not Allowed");
      }

      report = await Report.findByIdAndDelete(req.params.id)
      res.json({"Success" : "Report has been deleted.", report: report})
   } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
   }
})

module.exports = router;