"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
//the error handler takes 4 arguments
function errorHandler(err, req, res, next) {
    console.log(err.stack);
    res.status(500).send(err.message);
}
