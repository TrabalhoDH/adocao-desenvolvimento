const fs = require('fs');


const feedControler ={
    show : (request, response)=>{
    response.render('feed')
    },

};


module.exports = feedControler;