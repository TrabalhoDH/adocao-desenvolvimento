const express = require("express");
const router = express.Router();



const feedControler = (request, response)=>{
    response.render('feed')
};


module.exports = feedControler;