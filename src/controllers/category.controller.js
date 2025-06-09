const getAllCategories=async (req,res)=>{
    res.send("Get all categories")
}
const addCategory=async (req,res)=>{
    res.send("Add category")
}
const singleCategory=async (req,res)=>{
    res.send("Single category")
}
const delCategory=async(req,res)=>{
    res.send("Del category")
}
const editCatgory=async(req,res)=>{
    res.send("Edit category")
}
export {getAllCategories,addCategory,singleCategory,delCategory,editCatgory}