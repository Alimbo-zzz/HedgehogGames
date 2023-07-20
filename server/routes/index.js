import express from 'express';
const app = express();

// routes
import routesAPI from './Route_API.js';


// use routes
app.use(routesAPI) // api Routes


export default app;