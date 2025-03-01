import { Document } from "mongoose";

export default interface USER_TYPE extends Document {
  role: "USER" | "SUPER-ADMIN";
  name: string;
  email: string;
  phoneNumber: number;
  password?: string;
  country: string;
  gender: "Male" | "Female" | "Others";
  age: number;
  address: string;
  createdAt?: string;
  updatedAt?: string;
}

// const express = require('express');
// const bodyParser = require('body-parser');
// const route = require('./routes/route.js');
// const { default: mongoose } = require('mongoose');
// const newblog = require('./model/newblog.js');
// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect("mongodb+srv://rajgupta07082000:0Um5TBcHGam3DxeZ@cluster0.p92r9bx.mongodb.net/rajgupta07082000-DB", {
//     useNewUrlParser: true
// })
//     .then(() => console.log("MongoDb is connected"))
//     .catch(err => console.log(err))

// app.use('/', route);

// app.listen(process.env.PORT || 3000, function () {
//     console.log('Express app running on port ' + (process.env.PORT || 3000))
