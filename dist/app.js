"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routs_1 = require("./app/modules/user.routs");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/user", user_routs_1.userRoute);
// app.use("/api/v1/student", studentroute);
app.get("/", (req, res) => {
    const a = "server is runing";
    res.send(a);
});
exports.default = app;
