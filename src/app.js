import express from "express";
import bodyparser from "body-parser";
import { connectDB } from "./db.js";
import { PORT } from "./config.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import categoryRoute from "./routes/categoryRoute.js";



const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

connectDB();

app.get("/", (req, res) => {
    res.send("home");
});

app.use("/api/user", userRoute);

app.use("/api/product",productRoute);

app.use("/api/category",categoryRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});