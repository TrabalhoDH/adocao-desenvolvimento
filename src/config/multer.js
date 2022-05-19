const multer = require('multer');
const path = require('path');
const { v4 : uuid } = require('uuid');


const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        const caminhoPasta = path.resolve(__dirname, '..', 'uploads');
        cb(null, caminhoPasta)
    },
    filename: (req,file,cb)=>{
        const fileName = `${uuid()}-${file.originalname}`;

        cb(null, fileName)
    }
});

module.exports = storage;