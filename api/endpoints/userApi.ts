import { json } from "express";
import userController from '../../controllers/userController'
const express = require('express')
const router = express.Router();

router.post('/create', userController.createUser);

export default router;

