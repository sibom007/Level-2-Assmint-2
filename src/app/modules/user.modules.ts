import { Schema, model } from "mongoose";
import { TUser, TuserModel } from "./user.interface";
import config from "../config";
import bcrypt from "bcrypt";

const userSchema = new Schema<TUser, TuserModel>({
  userId: { type: Number, require: true, unique: true },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  isActive: { type: Boolean, required: true, default: false },
  hobbies: { type: [String], required: true },
  orders: [
    {
      productName: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  isdeleted: { type: Boolean, default: false },
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
// userSchema.pre("findOne", function (next) {
//   this.projection({
//     userId: 1,
//     username: 1,
//     fullName: 1,
//     email: 1,
//     age: 1,
//     address: 1,
//   });
//   next();
// });

userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

userSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
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

userSchema.pre("updateOne", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const update = this.getUpdate();
  if (update?.$set && update.$set.password) {
    // hashing password and save into DB
    update.$set.password = await bcrypt.hash(
      update.$set.password,
      Number(config.bcrypt_salt_rounds)
    );
    next();
  }
});

// isUserExits
userSchema.statics.isUserExits = async function (userId: number) {
  const existingUser = await usermodule.findOne({ userId });
  return existingUser;
};

export const usermodule = model<TUser, TuserModel>("user", userSchema);
