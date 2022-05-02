import express from 'express';
const router=express.Router();
import {register} from '../controllers/auth.js'

router.get('/',(req,res)=>{res.send('You are in /auth')});

router.get('/register',register);

export default router;