import express from 'express';
const app=express();
import  auth from './routes/auth.js';
import path from 'path';


app.listen(8000,()=>console.log('Server has been started.'));