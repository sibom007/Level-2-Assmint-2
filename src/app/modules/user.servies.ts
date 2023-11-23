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
const getSingleuserDB = async (id: number) => {
  const userId = id;
  if (await usermodule.isUserExits(userId)) {
    const result = await usermodule.findOne({ userId });
    return result;
  } else {
    throw new Error();
  }
};

export const userservise = {
  createUserDB,
  getallUserDB,
  getSingleuserDB,
};
