const getAllProducts=async (req,res)=>{
    res.send("Get all products")
}
const addProduct=async (req,res)=>{
    try{
        let productImage=req.file.filename;
         res.send("Add Product")
    }
    catch(err){
        res.send("No Add Product")
    }
   
}
const singleProduct=async (req,res)=>{
    res.send("Single Product")
}
const delProduct=async(req,res)=>{
    res.send("Del Product")
}
const editProduct=async(req,res)=>{
    res.send("Edit Product")
}
export {getAllProducts,addProduct,singleProduct,delProduct,editProduct}