import express from "express";
import { usercontorler } from "./user.contorler";
const route = express.Router();
route.post("/", usercontorler.createuser);
route.get("/", usercontorler.getalluser);
route.get("/:userId", usercontorler.getSingleuser);
route.put("/:userId", usercontorler.UpdateSingleuser);
export const userRoute = route;
