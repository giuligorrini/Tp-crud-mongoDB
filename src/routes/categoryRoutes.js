import { Router } from "express";
import { create, getAll } from "../controllers/categoryController";

const categoryRoutes = Router();

categoryRoutes.get("/getAll",getAll);
categoryRoutes.post("/create",create);

export default categoryRoutes;