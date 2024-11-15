"use strict";
//middleware, at end of middleware, remember to execute the next
//such that we go to the next function, if not. request stops here and
//never returns.
//if this was just done with app.use, no need to specify types
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = logger;
//but in ts, we do it here cpz this is a normal ts function
function logger(req, res, next) {
    console.log(`${req.method} ${req.ip} ${req.originalUrl}`);
    next();
}
;
