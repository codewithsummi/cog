import express from 'express';
import { addCategory, delCategory, editCatgory, getAllCategories, singleCategory } from '../controllers/category.controller.js';
import upload from '../middleware/fileUpload.middleware.js';
import auth from '../middleware/auth.middleware.js';
const router=express.Router();
router.get("/",getAllCategories)
router.get("/single/:id",singleCategory)
router.post("/add",auth,upload.single('attach'),addCategory);
router.delete("/single/:id",auth,delCategory)
router.put("/single/:id",auth,editCatgory)
export default router;