import { TUser } from "./user.interface";
import { usermodule } from "./user.modules";

const createUserDB = async (Tuser: TUser) => {
  const result = await usermodule.create(Tuser);
  return result;
};
const getallUserDB = async () => {
  const result = await usermodule.find();
  return result;
};

export const userservise = {
  createUserDB,
  getallUserDB,
};
