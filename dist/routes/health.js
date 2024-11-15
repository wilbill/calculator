"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express"); //we import router module
exports.router = (0, express_1.Router)(); //its a function
//we export the router to be used in some other file
exports.router.get('/', (req, res) => {
    throw new Error('Application Error');
    res.send({ message: 'ok', timestamp: req.timestamp });
});
