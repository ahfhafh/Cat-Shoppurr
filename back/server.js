import express from 'express';

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5060;

app.use("")

app.get("/*", (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, err => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Server running...");
});

// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
})
  
// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})