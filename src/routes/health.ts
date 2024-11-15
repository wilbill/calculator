import { Router } from "express";  //we import router module

export const router = Router(); //its a function
//we export the router to be used in some other file

router.get('/', (req, res) =>{
    res.send({message: 'ok'});
});
