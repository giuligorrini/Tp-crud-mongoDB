import { Router } from "express";
import { create, deleteProduct, findOne, getAll, update } from "../controllers/productController.js";
import { verifyTokenMiddleware } from "../../middlewares/verifyTokenMiddleware.js";


const productRoute = Router();

productRoute.get("/getAll",verifyTokenMiddleware,getAll);
productRoute.post("/create",verifyTokenMiddleware,create);
productRoute.get("/findOne/name",verifyTokenMiddleware,findOne);
productRoute.put("/update/:id",verifyTokenMiddleware,update);
productRoute.delete("/delete/:id",verifyTokenMiddleware,deleteProduct);




export default productRoute;