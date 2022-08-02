const express = require('express');

module.exports = (server) => {

    // API Routes
    const router = express.Router();
    server.use('/api', router);

    // TODO Routes
    const todoService = require('../api/todo/todoServices');
    todoService.register(router, '/todos');
}