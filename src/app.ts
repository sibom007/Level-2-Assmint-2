import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoute } from "./app/modules/user.routs";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);

// app.use("/api/v1/student", studentroute);

app.get("/", (req: Request, res: Response) => {
  const a = "server is runing";
  res.send(a);
});

export default app;
