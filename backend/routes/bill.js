const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');
const Bill = require('../models/Bill');
const { body, validationResult } = require('express-validator');

// Route 1 :  Get all the notes: GET "/api/report/fetchAllBills". require Auth
router.get('/fetchAllBills', fetchUser, async (req, res) => {
   try {
      const reports = await Bill.find({ user: req.user.id });
      res.json(reports)
   } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
   }
})

// Route 2 :  Add a new Report: POST "/api/report/addBill". require Auth
router.post('/addBill', fetchUser, [
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
      const bill = new Bill({
         reportNo, description, medication, user: req.user.id
      })
      const savedBill = await bill.save()
      res.json(savedBill);

   } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
   }
})

// Route 3 :  Update an existing Report: PUT "/api/report/updateReport". require Auth
router.put('/updateBill/:id', fetchUser, async (req, res) => {
   try {
      const { reportNo, description, medication } = req.body;

      // Creating new Bill object
      const newBill = {};
      if(reportNo){newReport.reportNo = reportNo};
      if(description){newReport.description = description};
      if(medication){newReport.medication = medication};
      
      // find the note to be updated and update it
      let bill = await Bill.findById(req.params.id);
      if(!bill){return res.status(404).send("Not Found!")};

      // allow deletion only if user own this note
      if(bill.user.toString() !== req.user.id){
         return res.status(401).send("Not Allowed");
      }

      bill = await Bill.findByIdAndUpdate(req.params.id, {$set: newBill}, {new:true})
      res.json(bill)
   } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
   }
})

// Route 4 :  Delete an existing Bill: DELETE "/api/report/deleteBill". require Auth
router.delete('/deleteBill/:id', fetchUser, async (req, res) => {
   try {
      // find the note to be deleted and delete it
      let bill = await Bill.findById(req.params.id);
      if(!bill){return res.status(404).send("Not Found!")};

      // allow deletion only if user own this note
      if(bill.user.toString() !== req.user.id){
         return res.status(401).send("Not Allowed");
      }

      bill = await Bill.findByIdAndDelete(req.params.id)
      res.json({"Success" : "Report has been deleted.", bill: bill})
   } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
   }
})

module.exports = router;