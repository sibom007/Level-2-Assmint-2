import express from "express";
import { usercontorler } from "./user.contorler";
const route = express.Router();
route.post("/", usercontorler.createuser);
export const userRoute = route;
