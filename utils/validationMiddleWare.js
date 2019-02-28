const Task = require('../models/task.model');

module.exports.minutesMiddleWare = async (req, res, next) => {

    if (req.body.startTime === undefined) {
        const task = await Task.findById({_id: req.params.id})
        req.body.startTime = task.startTime
    }

    if (req.body.endTime === undefined) {
        const task = await Task.findById({_id: req.params.id})
        req.body.endTime = task.endTime
    }


    if (req.body.startTime[0] < 8 || req.body.startTime[0] > 18) {
        return next('Invalid data')
    }
    if (req.body.endTime[0] < 8 || req.body.endTime[0] > 19) {
        return next('Invalid data')
    }
    if (req.body.startTime[1] < 0 || req.body.startTime[1] > 59) {
        return next('Invalid data')
    }
    if (req.body.endTime[1] < 0 || req.body.endTime[1] > 59) {
        return next('Invalid data')
    }
    if (req.body.startTime[0] === req.body.endTime[0] && req.body.startTime[1] > req.body.endTime[1]) {
        return next('Invalid data')
    }
    if (req.body.startTime[0] > req.body.endTime[0]) {
        return next('Invalid data')
    }
    next()

}
