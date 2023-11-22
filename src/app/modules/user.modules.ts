import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
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
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const usermodule = model<Schema>("user", userSchema);
