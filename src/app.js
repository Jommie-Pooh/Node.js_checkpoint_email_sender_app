const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("Server is Live");
});

app.post("")

module.exports = app