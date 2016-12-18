'use strict'

const express = require('express');
const http = require('http');
const app = express();
const port = 8080;
//serve front end files
app.use(express.static('./assets/'));

//load html default
app.get('/', (req, res) => {
    res.sendfile('./assets/index.html');
});

app.listen(process.env.PORT || port,() => {
	console.log("server listening on port: "+(process.env.PORT || port));
});