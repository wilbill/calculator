import {Router} from 'express';
import { logger } from '../middlewares';
export const router = Router();

//we add our middleware
router.use(logger);

router.get('/', logger, (req, res)=>{
    res.send({
        message: "get all calculations",
        data: [
            {id: 1, result: 1},
            {id: 2, result:2}
        ]
    });
})

router.get('/:id', (req, res)=>{
    res.send({
        message: 'get calculation by id',
        id: req.params.id, //any id you put in is wat u get
        result: 1

    });
})