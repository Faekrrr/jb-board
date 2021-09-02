import express from 'express';
import connection from "./db/connection";
// import bodyParser from 'body-parser';
const bodyParser  = require('body-parser');

import userApi from './api/endpoints/api';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', (req, res) => res.send(`Headers: ${req.rawHeaders}`));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});


app.use('/api/user', userApi)


exports.module = app;

