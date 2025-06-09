import express from 'express';
import { addProduct, delProduct, editProduct, getAllProducts, singleProduct } from '../controllers/product.controller.js';
const router=express.Router();
router.get("/",getAllProducts);
router.get("/single/:id",singleProduct);
router.post("/add",addProduct);
router.delete("/single/:id",delProduct);
router.put("/single/:id",editProduct);
export default router;