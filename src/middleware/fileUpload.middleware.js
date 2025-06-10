import multer from "multer";
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"src/uploads")
    },
    filename:function(req,file,cb){
        const myName=Date.now()+"-image-"+file.originalname;
        cb(null,myName)
    }
})
const upload=multer({
    storage,
    limits :{fileSize:2000000}
})
export default upload;