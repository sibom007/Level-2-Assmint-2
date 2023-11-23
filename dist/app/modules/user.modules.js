"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usermodule = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userId: { type: Number, require: true, unique: true },
    username: {
        type: String,
        maxlength: [30, "only add 20 word"],
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        maxlength: [100, "not more then 100 Character"],
    },
    fullName: {
        firstName: {
            type: String,
            required: true,
            maxlength: [30, "only add 30 word"],
        },
        lastName: {
            type: String,
            required: true,
            maxlength: [30, "only add 20 word"],
        },
    },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    isActive: { type: Boolean, required: true },
    hobbies: { type: [String], required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
    },
});
// Middleware
userSchema.pre("find", function (next) {
    this.projection({ username: 1, fullName: 1, email: 1, age: 1, address: 1 });
    next();
});
userSchema.post("save", function (doc, next) {
    doc.password = "";
    next();
});
exports.usermodule = (0, mongoose_1.model)("user", userSchema);
