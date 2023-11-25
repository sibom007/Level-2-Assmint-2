import { Request, Response } from "express";
import { userservise } from "./user.servies";
import ZodUserSchema from "./user.validation";

const createuser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const zodvalidationuser = ZodUserSchema.parse(user);
    const result = await userservise.createUserDB(zodvalidationuser);
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

const getSingleuser = async (req: Request, res: Response) => {
  try {
    const usersendId = parseInt(req.params.userId);
    const result = await userservise.getSingleuserDB(usersendId);
    res.status(200).json({
      success: true,
      message: "User get successfull",
      data: result,
    });
  } catch (Error) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const UpdateSingleuser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.userId);
    const userId = id;
    const user = req.body;
    const result = await userservise.UpdateSingleUserDB(userId, user);
    res.status(200).json({
      success: true,
      message: "Users modifay successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};
const DeleteSingleuser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.userId);
    const userId = id;
    const result = await userservise.DeleteSingleUserDB(userId);
    res.status(200).json({
      success: true,
      message: "Users deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const Orderuser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.userId);
    const userId = id;
    const order = req.body;
    const result = await userservise.OtheraddUserDB(userId, order);
    console.log(result);
    res.status(200).json({
      success: true,
      message: "Users add order successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const getSingleuserorder = async (req: Request, res: Response) => {
  try {
    const usersendId = parseInt(req.params.userId);
    const result = await userservise.getSingleuserorderDB(usersendId);
    res.status(200).json({
      success: true,
      message: "User order get successfull",
      data: result,
    });
  } catch (Error) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

export const usercontorler = {
  createuser,
  getalluser,
  getSingleuser,
  UpdateSingleuser,
  DeleteSingleuser,
  Orderuser,
  getSingleuserorder,
};
