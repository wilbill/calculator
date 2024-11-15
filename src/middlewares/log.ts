//middleware, at end of middleware, remember to execute the next
//such that we go to the next function, if not. request stops here and
//never returns.
//if this was just done with app.use, no need to specify types

import { NextFunction } from "express";

//but in ts, we do it here cpz this is a normal ts function
export function logger(req:Request, res:Response, next:NextFunction) {
   console.log(`${req.timestamp} ${req.method} ${req.ip} ${(req as any).originalUrl}`);
   next();
};
