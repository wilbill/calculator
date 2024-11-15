import express from 'express';
import { healthRouter, calculatorRouter } from './routes';
import { logger } from './middlewares';

const app = express();

//there was middleware here, but i put them in their own folders so now i am
//using it here
app.use(logger);

app.use('/health', healthRouter);
app.use('/calculator', calculatorRouter);

const port=3000;
app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
})

