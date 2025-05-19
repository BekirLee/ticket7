import connectDb from "./app/db.js";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import router from "./src/routes/productRouter.js";

dotenv.config();
const app = express();
connectDb();

app.use(cors());
app.use(express.json());
app.use("/api/products/", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`port ${PORT}`);
});
