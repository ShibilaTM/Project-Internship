const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projecttitle: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    projectreport: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    }
});

const Project = mongoose.model('projectreport', projectSchema);

module.exports = Project;
