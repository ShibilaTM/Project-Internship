const userData = require('../model/userData');
const router = require('express').Router();
const cors = require('cors');
router.use(cors());
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')
//Signup
router.post('/add', async (req, res) => {
    try {
        const data = req.body;
        
        // Check if exit mark is greater than 45
        if (parseInt(data.exitmark) >= 45) {
            const user = await userData(data).save();
            res.status(200).json({message:'successfully registered'});
        } else {
            // If exit mark is not greater than 45, return an error
            res.status(400).json({ error: 'Exit mark must is less than required' });
        }
    } catch (error) {
        res.status(400).json(error);
    }
});



//login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ status: 'error', message: 'Email and password are required' });
        } 

        const user = await userData.findOne({ email });

        if (user) {
            let payload = { email: user.email, password: user.password };
            let token = jwt.sign(payload, 'reactInternshipApp');
            res.status(200).send({ message: 'success', token: token });
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
});

module.exports = router;
