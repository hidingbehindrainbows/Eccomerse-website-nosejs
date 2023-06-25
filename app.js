'use strict';


const express = require('express');
const path = require('path');

const app = express();

const port = 3000
// app.listen(3000);
app.listen(process.env.PORT || port, () => console.log("Listening on PORT"));
const partialPath = `${__dirname}` ;
// console.log(partialPath);
app.engine('html', require('ejs').renderFile);
app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, `views`));
app.use(express.static(__dirname, 'public'));

// console.log(`Running`);

app.get(`/`, (req, res)=>{
    res.render(`homepage`, {title: "Homepage", partialPath});
});

app.get(`/about`, (req, res)=>{
    res.render(`about`, {title: "About Us", partialPath});
});

app.get(`/shop`, (req, res)=>{
    res.render(`shop`, {title: "Shopping!!", partialPath});
});

app.get(`/about/`, (req, res)=>{
    res.redirect(`/about`)
});

app.use((req, res)=>{
    res.render(`404`, {title: "404 Not Found", partialPath});
});
