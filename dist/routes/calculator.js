"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
exports.router = (0, express_1.Router)();
//we add our middleware
exports.router.use(middlewares_1.logger);
exports.router.get('/', middlewares_1.logger, (req, res) => {
    res.send({
        message: "get all calculations",
        data: [
            { id: 1, result: 1 },
            { id: 2, result: 2 }
        ]
    });
});
exports.router.get('/:id', (req, res) => {
    res.send({
        message: 'get calculation by id',
        id: req.params.id, //any id you put in is wat u get
        result: 1
    });
});
