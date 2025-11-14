const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Hello from Node.js API!" });
});

module.exports = app;
