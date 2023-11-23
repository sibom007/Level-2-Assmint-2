"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_contorler_1 = require("./user.contorler");
const route = express_1.default.Router();
route.post("/", user_contorler_1.usercontorler.createuser);
route.get("/", user_contorler_1.usercontorler.getalluser);
exports.userRoute = route;
