"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usercontorler = void 0;
const user_servies_1 = require("./user.servies");
const createuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user } = req.body;
        const result = yield user_servies_1.userservise.createUserDB(user);
        res.status(200).json({
            success: true,
            message: "User created successfully!",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.usercontorler = { createuser };
