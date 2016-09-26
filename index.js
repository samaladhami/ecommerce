const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const port = 8999



app.use(bodyParser.json());
app.use(cors());


const routes = require('./route')

routes( app )






app.listen(port ,() => console.log(`listening on ${port}`) )
