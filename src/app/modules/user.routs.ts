import express from "express";
import { usercontorler } from "./user.contorler";
const route = express.Router();
route.post("/", usercontorler.createuser);
route.get("/", usercontorler.getalluser);
export const userRoute = route;
