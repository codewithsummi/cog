const getAllProducts=async (req,res)=>{
    res.send("Get all products")
}
const addProduct=async (req,res)=>{
    res.send("Add Product")
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