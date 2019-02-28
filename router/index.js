const express = require('express');
const router = express.Router();
const taskController = require('./taskController.js')
const validationMiddleWare = require('../utils/validationMiddleWare.js')

router.get('/api/task', taskController.getAllTasks);
router.post('/api/task', validationMiddleWare.minutesMiddleWare, taskController.createTask);
router.delete('/api/task/:id', taskController.deleteTask);
router.put('/api/task/:id', validationMiddleWare.minutesMiddleWare, taskController.updateTask);

module.exports = router;
