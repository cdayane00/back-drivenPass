import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import chalk from 'chalk';
import dotenv from 'dotenv';
dotenv.config();
var app = express();
app.use(cors());
app.use(json());
var port = +process.env.PORT || 5000;
app.listen(port, function () {
    console.log(chalk.bold.green("Server is running on port ".concat(port)));
});
