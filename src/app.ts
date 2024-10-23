import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

// express
const app = express();

// parsers
app.use(express.json());
app.use(cors());
app.use(cookieParser())

// application routes
app.use("/api/v1", router);

//global error handler
app.use(globalErrorHandler)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

//not found
app.use(notFound)

export default app;
