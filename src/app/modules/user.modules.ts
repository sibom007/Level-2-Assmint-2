import { Schema, model } from "mongoose";
import { TUser, Torder, TuserModel, TuserOrderModel } from "./user.interface";

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
  isActive: { type: Boolean, required: true, default: false },
  hobbies: { type: [String], required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  isdeleted: { type: Boolean, default: false },
});

const orderSchema = new Schema<Torder, TuserOrderModel>({
  productName: String,
  price: Number,
  quantity: Number,
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
userSchema.pre("find", function (next) {
  this.find({ isdeleted: { $ne: true } });
  next();
});
userSchema.pre("findOne", function (next) {
  this.find({ isdeleted: { $ne: true } });
  next();
});

// isUserExits
userSchema.statics.isUserExits = async function (userId: number) {
  const existingUser = await usermodule.findOne({ userId });
  return existingUser;
};
userSchema.statics.isUserOrderExits = async function (order: []) {
  const existingUser = await usermodule.findOne({ order });
  return existingUser;
};

export const usermodule = model<TUser, TuserModel>("user", userSchema);
