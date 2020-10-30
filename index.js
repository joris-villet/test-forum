if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const express = require('express');
const app = express();

const session = require('express-session');

app.use(session ({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  httpOnly: true,
  secure: false,
  maxAge: null
}));

const cors = require('cors');
app.use(cors());


// app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const router = require('./app/router');
app.use('/api',router);

const authRouter = require('./app/authRouter');
app.use('/api', authRouter);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});