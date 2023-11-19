const userData = require('../model/userData');
const router = require('express').Router();
const cors = require('cors');
router.use(cors());
const bcrypt = require('bcrypt')

//Signup
router.post('/add', async (req, res) => {
    try {
        const data = req.body;
        
        // Check if exit mark is greater than 45
        if (parseInt(data.exitmark) >= 45) {
            const user = await userData(data).save();
            res.status(200).json('success');
        } else {
            // If exit mark is not greater than 45, return an error
            res.status(400).json({ error: 'Exit mark must be greater than or equal to  45 to register.' });
        }
    } catch (error) {
        res.status(400).json(error);
    }
});


//Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ status: 'error', message: 'Email and password are required' });
        }

        // Find the user in the database based on the provided email
        const user = await userData.findOne({ email });

        if (user) {
            // Compare the provided password with the stored password (plaintext, not recommended)
            if (user.password === password) {
                // Passwords match, consider it a successful login
                return res.status(200).json({ status: 'success', message: 'Login successful' });
            } else {
                // Passwords don't match, return an error
                return res.status(401).json({ status: 'error', message: 'Incorrect password' });
            }
        } else {
            // User not found, return an error
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
});

module.exports = router;
