import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import express, { Request, Response } from "express";
import { dbConnect } from "./config/db";
import { errorHandler, notFound } from "./middlewares/errorMiddleware";
import { productRoutes } from "./routes/productRoutes";
import { userRoutes } from "./routes/userRoutes";
import { orderRoutes } from "./routes/orderRoutes";
import { imageUploadRoute } from "./routes/uploadRoute";
import s3Client from "./aws-config";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/config/paypal", (req: Request, res: Response) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
});
app.use("/api/image/upload", imageUploadRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running...");
});

app.use(notFound);
app.use(errorHandler);

const server = async () => {
  try {
    await dbConnect();
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not configured.");
    }
    if (!process.env.PAYPAL_CLIENT_ID) {
      throw new Error("Paypal client ID is not configured.");
    }
    if (
      !process.env.AWS_ACCESS_KEY_ID ||
      !process.env.AWS_SECRET_ACCESS_KEY ||
      !process.env.BUCKET_NAME ||
      !process.env.BUCKET_REGION
    ) {
      throw new Error("AWS client is not configured properly.");
    }
    app.listen(5000, () => {
      console.log("Listening on port 5000...");
    });
  } catch (e) {
    console.log(e);
  }
};

server();
