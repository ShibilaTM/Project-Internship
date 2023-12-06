const express = require('express');
const router = express.Router();
const Project = require('../model/projectData');
const submission = require('../model/submData')
const cors = require('cors')
router.use(cors());
const jwt = require('jsonwebtoken');
const admin = require('../model/adminModel');
const userData = require('../model/userData')

function verifytoken(req, res, next) {
    try {
        const token = req.headers.token;
        if (!token) throw 'Token not provided';

        const payload = jwt.verify(token, 'reactInternshipApp');
        if (!payload) throw 'Invalid token';
        req.authUser = payload; // Set authUser property
        next();
    } catch (error) {
        console.error(error);
        res.status(401).send('Unauthorized: ' + error);
    }
}


router.post('/project', verifytoken, async (req, res) => {
  try {
      const data = req.body;
      const userEmail = req.authUser.email;
      const user = await userData.findOne({ email: userEmail });

      if (!user) {
          return res.status(404).json({ success: false, message: 'User not found' });
      }

      const projectData = {
          ...data,
          studentId: user._id, // Assign the user's ID to the studentId field
      };

      const project = await Project.create(projectData);

      res.status(200).json({ message: 'Successfully submitted the project', projectId: project._id });
  } catch (error) {
      console.error(error);
      res.status(400).json({ success: false, message: 'Error in the submission', error: error.message });
  }
});





router.get('/question', verifytoken, async (req, res) => {
    try {
      // Fetch the question and deadline from the database
      const result = await admin.findOne({}); // Assuming you have only one assignment
  
      if (!result) {
        return res.status(404).json({ message: 'Assignment not found' });
      }
  
      res.status(200).json({ question: result.assignment1, deadline: result.deadline });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error fetching question', error: error.message });
    }
  });
  



router.post('/subm',verifytoken, async (req, res) => {
    try {
      const data = req.body;
      const submissions = await submission.create(data);
      res.status(200).json({ message: 'Successfully submitted' });
    } catch (error) {
      console.error(error);
      res.status(400).send('Error in the submission');
    }
  });

//submission status
  router.get('/submission-status', verifytoken, async (req, res) => {
    try {
        const userEmail = req.query.userEmail;

        // Check if the user has submitted a project
        const projectSubmission = await Project.findOne({ userEmail });

        // Check if the user has submitted a submission
        const submissionStatus = await submission.findOne({ userEmail });

        res.status(200).json({ hasSubmittedProject: !!projectSubmission, hasSubmittedSubmission: !!submissionStatus });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error checking submission status', error: error.message });
    }
});



module.exports = router