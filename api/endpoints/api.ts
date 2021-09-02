import { json } from "express";
import jobsController from '../../controllers/jobsController'
import userController from '../../controllers/userController'
const express = require('express')
const router = express.Router();

router.get('/test', jobsController)

router.post('/test', userController.createUser);

export default router;

