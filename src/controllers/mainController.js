const express = require("express");
const router = express.Router();

const mainController = (request, response)=>{
    response.render('../views/home')
};





module.exports = mainController;