import { Schema, model } from "mongoose";

const department = new Schema({
    name: {
        type: String,
        require: true
    },
    code: {
        type: String,
        require: true
    }
}, {timestamps: true});

const myModel =  model('department', department);

export default myModel;