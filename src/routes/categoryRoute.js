import { Router } from "express";
import { create, getAll } from "../controllers/categoryController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const categoryRoute = Router();

categoryRoute.get("/getAll",getAll);
categoryRoute.post("/create",create);

export default categoryRoute;