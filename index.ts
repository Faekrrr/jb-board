import express from 'express';
import connection from "./db/connection";
// import bodyParser from 'body-parser';
const bodyParser  = require('body-parser');

import userApi from './api/endpoints/userApi';
import enterpriseApi from './api/endpoints/enterpriseApi';
import jobsApi from './api/endpoints/jobsApi'

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


app.use('/api/user', userApi);
app.use('/api/enterprise', enterpriseApi);
app.use('/api/jobs', jobsApi);

exports.module = app;

