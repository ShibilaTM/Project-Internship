const express = require ('express');
const router = express.Router();
const dashData = require("../model/gradeData");
require("../config/db");



//GET Method -----------------

router.get("/", async (req, res) => {
    try {
      const data = await dashData.find();
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send("No data found");
    }
  });


  module.exports = router;
