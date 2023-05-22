import { Schema, model } from "mongoose";

const subject = new Schema({
    name: {
        type: String,
        require: true
    },
    code: {
        type: String,
        require: false
    },
    department: {
        type: Schema.Types.ObjectId, // put the id of the department here
        require: false,
        ref: 'department' // id of? department
    },
    prerequisite: {
        type: String,
        require: true
    }
}, {timestamps: true});

const myModel =  model('subject', subject);

export default myModel;