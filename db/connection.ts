const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect(`${process.env.MONGO_URI}`, { useNewUrlParser: true })