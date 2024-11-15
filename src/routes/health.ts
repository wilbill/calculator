import { Router } from "express";  //we import router module

export const router = Router(); //its a function
//we export the router to be used in some other file

router.get('/', (req:Request, res) =>{
    throw new Error('Application Error');
    res.send({message: 'ok', timestamp: req.timestamp});
});
