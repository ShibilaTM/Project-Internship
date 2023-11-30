const express = require('express');
const router = express.Router();
const Project = require('../model/projectData');
const submission = require('../model/submData')
const cors = require('cors')
router.use(cors());
const jwt = require('jsonwebtoken')

function verifytoken(req,res,next){
    try {
        const token= req.headers.token
        if(!token) throw 'unauthorized'
        let payload = jwt.verify(token,'reactInternshipApp')
        if(!payload) throw 'unauthorized'
        next()
    } catch (error) {
        res.status(401).send('error')
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


router.post('/subm',verifytoken,async(req,res)=>{
    try {
        const data = req.body
        const submissions = await submission(data).save()
        res.status(200).json({message:'Successfully submitted'})
    } catch (error) {
        res.status(400).send('error in the submission')
    }
})

module.exports = router