//import {Router} from 'express';
import { Router, Request, Response } from "express";


import { logger } from '../middlewares';
import { CalculatorRequestBody } from '../types';
export const router = Router();

//our middleware was here

router.get('/', (req:Request, res)=>{
    res.send({
        message: "get all calculations",
        timestamp: req.timestamp,
        data: [
            {id: 1, result: 1},
            {id: 2, result:2}
        ]
    });
})

router.get('/:id', (req, res)=>{
    res.send({
        message: 'get calculation by id',
        timestamp: req.timestamp,
        id: req.params.id, //any id you put in is wat u get
        result: 1

    });
})
//this is a post request, we are using generic to override the default
//req here has no param, so set it to empty obj, 2nd to any
router.post('/', (req:Request< {},any, CalculatorRequestBody>, res)=>{
    const {operator, operand1, operand2} = req.body; //we need to specift types though, hence types interface
    let result : number  | string;
    switch(operator){
        case '+':
            result = operand1+operand2;
            break;
        case '-':
            result = operand1-operand2;
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
    })
})