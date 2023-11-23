import { Schema, model } from "mongoose";
import { TUser, TuserModel } from "./user.interface";

const userSchema = new Schema<TUser, TuserModel>({
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

// Middleware;
userSchema.pre("find", function (next) {
  this.projection({
    userId: 1,
    username: 1,
    fullName: 1,
    email: 1,
    age: 1,
    address: 1,
  });
  next();
});
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});
// isUserExits

userSchema.statics.isUserExits = async function (userId: number) {
  const existingUser = await usermodule.findOne({ userId });
  return existingUser;
};

// userSchema.methods.isUserExits = async function (userId: number) {
//   const existingUser = await usermodule.findOne({ userId });
//   return existingUser;
// };

export const usermodule = model<TUser, TuserModel>("user", userSchema);
