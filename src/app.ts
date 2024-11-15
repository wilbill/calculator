import express from 'express';
import { healthRouter, calculatorRouter } from './routes';
import { addTimestamp, errorHandler, logger } from './middlewares';

const app = express();

//there was middleware here, but i put them in their own folders so now i am
//using it here
//the order matters
app.use(express.json());
app.use(addTimestamp); 
app.use(logger);

app.use('/health', healthRouter);
app.use('/calculator', calculatorRouter);

//error handler middleware is always after other middlewares
app.use(errorHandler);

const port=3000;
app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
})

