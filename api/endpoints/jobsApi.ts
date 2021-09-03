import { json } from "express";
import jobsController from '../../controllers/jobsController'
const express = require('express')
const router = express.Router();

router.post('/create', jobsController.createJobOffer);
export default router;

