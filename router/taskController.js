const Task = require('../models/task.model');


module.exports.createTask = async (req, res, next) => {
    try {

        console.log(req.body);
        const task = new Task(req.body);
        const newTask = await task.save();
        res.send(await Task.find());
    } catch (e) {
        next(e);
    }
};

module.exports.getAllTasks = async (req, res, next) => {
    try {
        const task = await Task.find();
        res.send(task);
    } catch (e) {
        next (e);
    }
};

module.exports.deleteTask = async  (req, res, next) => {
    try {
        await Task.findByIdAndDelete({_id: req.params.id})
        res.send(await Task.find());
    } catch (e) {
        next(e);
    }
}

module.exports.updateTask = async (req, res, next) => {
    try {
        const updatedTask = req.body;
        await Task.findOneAndUpdate({_id: req.params.id}, updatedTask)
        res.send(await Task.find())
    } catch (e) {
        next (e)
    }

}
