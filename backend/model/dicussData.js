const mongoose = require('mongoose');
const {username} = mongoose.Schema;
const discussSchema = mongoose.Schema({
  title:{
    type: String,
    
  },
  query:{
    type: String,
 
  },
  date:{type:Date},
  // comments:[{


  //   text:String,
  //   cerated:{type:Date, default:Date.now},
  //   postedBy:{type:username, ref:'user'}
  
  
  // }

  // ]
})

const Data=mongoose.model('discussDatas',discussSchema)
module.exports = Data;

// { type: Number, default: (new Date()).getTime() }