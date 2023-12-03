const express = require('express');
const router = express.Router();
const Project = require('../model/projectData');
const submission = require('../model/submData')
const cors = require('cors')
router.use(cors());
const jwt = require('jsonwebtoken');
const admin = require('../model/adminModel');

function verifytoken(req, res, next) {
    try {
        const token = req.headers.token;
        if (!token) throw 'Token not provided';

        const payload = jwt.verify(token, 'reactInternshipApp');
        if (!payload) throw 'Invalid token';

        next();
    } catch (error) {
        console.error(error);
        res.status(401).send('Unauthorized: ' + error);
    }
}

router.post('/project',verifytoken, async (req, res) => {
    try {
        const data = req.body;
        const project = await Project.create(data); // Using create method directly

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


module.exports = router