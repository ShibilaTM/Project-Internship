const mongoose = require('mongoose');
const discussSchema = mongoose.Schema({
  title:String,
  query:String,
  date:Date


})

const Data=mongoose.model('discussDatas',discussSchema)
module.exports = Data;

// { type: Number, default: (new Date()).getTime() }