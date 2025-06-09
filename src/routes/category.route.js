import express from 'express';
import { addCategory, delCategory, editCatgory, getAllCategories, singleCategory } from '../controllers/category.controller.js';
const router=express.Router();
router.get("/",getAllCategories)
router.get("/single/:id",singleCategory)
router.post("/add",addCategory);
router.delete("/single/:id",delCategory)
router.put("/single/:id",editCatgory)
export default router;