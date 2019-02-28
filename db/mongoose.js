const mongoose = require('mongoose');

require('../models/task.model');

mongoose.connect('mongodb://localhost/task_db',  { useNewUrlParser: true }, (err) =>{
    if(err){
        process.exit(0);
    } else{
        console.log("DB connection Succes");
    }

});

//enable debug
mongoose.set('debug', true);

//export db

module.exports = mongoose;
