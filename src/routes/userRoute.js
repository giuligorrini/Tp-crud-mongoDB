import express from "express";
import { create,deleteUser,get,updtate, validate } from "../controllers/userController.js";
import { verifyTokenMiddleware } from "../../middlewares/verifyTokenMiddleware.js";

const userRoute = express.Router();

userRoute.post("/create",create);
userRoute.get("/getAll",verifyTokenMiddleware,get);
userRoute.put("/update/:id",verifyTokenMiddleware,updtate);
userRoute.delete("/deleteUser/:id",verifyTokenMiddleware,deleteUser);
userRoute.post("/login",validate);


export default userRoute;