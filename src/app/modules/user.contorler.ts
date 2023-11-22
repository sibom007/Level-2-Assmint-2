import { Request, Response } from "express";
import { userservise } from "./user.servies";

const createuser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const result = await userservise.createUserDB(user);
    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getalluser = async (req: Request, res: Response) => {
  try {
    const result = await userservise.getallUserDB();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const usercontorler = { createuser,getalluser };
