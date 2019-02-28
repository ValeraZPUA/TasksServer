const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    subtasks: {
        type: Array,
        required: false
    },
    startTime: {
        type: [Number, Number],
        required: true,
    },
    endTime: {
        type: [Number, Number],
        required: true
    },


    // startTime: {
    //     type: String,
    //     required: true
    // },
    // endTime: {
    //     type: String,
    //     required: true
    // }
});

const Task = mongoose.model("Task", Schema);

module.exports = Task;
