const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var User = require('./User');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/map1.html');

});
app.post("/", (req, res) => {
    console.log(req.body);
})



app.listen(8000, function() {
    console.log("server start at port number 8000");
});