const mongoose = require('mongoose');
const Schema = mongoose.Schema

const subSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }, 
    comments:{
        type:String,
        required:true
    }
})
const submission = mongoose.model('submissiondata',subSchema)
module.exports = submission