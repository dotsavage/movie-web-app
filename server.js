
const express = require('express')
const srv = express();

srv.use(express.json())
srv.use(express.urlencoded({extended: true}))


srv.use('/', express.static(__dirname + "/public"))


srv.listen(3000);