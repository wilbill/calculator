"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
//import {Router} from 'express';
const express_1 = require("express");
exports.router = (0, express_1.Router)();
//our middleware was here
exports.router.get('/', (req, res) => {
    res.send({
        message: "get all calculations",
        timestamp: req.timestamp,
        data: [
            { id: 1, result: 1 },
            { id: 2, result: 2 }
        ]
    });
});
exports.router.get('/:id', (req, res) => {
    res.send({
        message: 'get calculation by id',
        timestamp: req.timestamp,
        id: req.params.id, //any id you put in is wat u get
        result: 1
    });
});
//this is a post request, we are using generic to override the default
//req here has no param, so set it to empty obj, 2nd to any
exports.router.post('/', (req, res) => {
    const { operator, operand1, operand2 } = req.body; //we need to specift types though, hence types interface
    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            result = 'invalid operand';
            break;
    }
    res.send({
        message: 'create a new calculation',
        timestamp: req.timestamp,
        result
    });
});
