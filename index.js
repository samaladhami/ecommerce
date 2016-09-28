const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')


const app = express();
const port = 8999
const mongoUri = 'mongodb://localhost:27017/products'

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json());

mongoose.connect(mongoUri)
mongoose.connection.once( "open", () => console.log( `Connected to MongoDB at ${ mongoUri }` ) );

app.use(cors());


const routes = require('./route')

routes( app )






app.listen(port ,() => console.log(`listening on ${port}`) )
