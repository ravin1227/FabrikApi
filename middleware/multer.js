import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },
    filename:(req,file,cb)=>{
        // cb(null,file.originalname)
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({storage:storage}); 
// const multipleUpload = upload.fields([{name: 'screenshot', maxCount: 1}, {name: 'object', maxCount:1}]);
export default  upload;
