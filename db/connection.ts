const mongoose = require("mongoose");
const { Schema } = mongoose;
require('dotenv').config();

let connection = mongoose.connect(`${process.env.MONGO_URI}`, { useNewUrlParser: true });


export default connection;