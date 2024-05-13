import { Router } from "express";
import { create, deleteProduct, findOne, getAll, update } from "../controllers/productController";


const productRoute = Router();

productRoute.get("/getAll",getAll);
productRoute.post("/create",create);
productRoute.get("/findOne/name",findOne);
productRoute.put("/update/:id",update);
productRoute.delete("/delete/:id",deleteProduct);




export default productRoute;