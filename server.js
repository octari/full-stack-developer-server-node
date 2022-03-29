import express from 'express';
import helloController from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";

// const express = require('express');
const app = express();
// app.get('/hello', (req, res) => {res.send('Life is good')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
// helloController(app);
app.use(express.json());
userController(app);
app.listen(4000);