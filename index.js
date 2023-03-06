const express = require('express');
require('dotenv').config()
const router = require('./routers/router');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());

app.use('/',router)

app.listen(9000);