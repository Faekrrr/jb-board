import { json } from "express";
import enterpriseController from '../../controllers/enterpriseController'
const express = require('express')
const router = express.Router();

router.post('/create', enterpriseController.createEnterprise);

export default router;

