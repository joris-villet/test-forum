if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const mainController = require('./app/controllers/mainController');

const cors = require('cors');
app.use(cors());



// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { router, authRouter } = require('./app/router');
app.use(router);
app.use(authRouter);


app.use(mainController.notFound);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});