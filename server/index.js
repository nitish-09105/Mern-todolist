const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors=require('cors');
const app = express();

// use express.json() to get data into JSON format
app.use(express.json());

// PORT
const PORT = process.env.PORT || 5500;

// use cors
app.use(cors());

// import routes
const TodoItemRoute = require('./routes/todoItems');

dotenv.config();
// connect to mongoDB
mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log('Database connected'))
.catch(err => console.log(err));

app.use('/', TodoItemRoute);

// add port and connect to server
app.listen(PORT, () => console.log("Server connected"));
