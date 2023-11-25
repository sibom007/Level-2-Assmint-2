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

const UpdateSingleUserDB = async (userId: number, user: object) => {
  if (await usermodule.isUserExits(userId)) {
    const result = await usermodule.updateOne({ userId }, { $set: user });
    console.log(result);
    return result;
  } else {
    throw new Error();
  }
};

const DeleteSingleUserDB = async (userId: number) => {
  if (await usermodule.isUserExits(userId)) {
    const result = await usermodule.updateOne({ userId }, { isdeleted: true });
    return result;
  } else {
    throw new Error();
  }
};

const OtheraddUserDB = async function (userId: number, order: object) {
  console.log(userId);
  if (await usermodule.isUserExits(userId)) {
    try {
      const user = await usermodule.findOne({ userId });
      if (user) {
        if (user.orders) {
          const result = await usermodule.updateOne(
            { userId },
            {
              $push: { orders: order },
            },
            { upsert: true }
          );
          return result;
        } else {
          const result = await usermodule.updateOne(
            { userId },
            {
              $set: { orders: [order] },
            },
            { upsert: true }
          );
          return result;
        }
      }
    } catch (error) {
      throw new Error();
    }
  } else {
    throw new Error();
  }
};

const getSingleuserorderDB = async (id: number) => {
  const userId = id;
  if (await usermodule.isUserExits(userId)) {
    const user = await usermodule.findOne({ userId });
    if (user) {
      const result = user.orders;
      return result;
    } else {
      throw new Error();
    }
  } else {
    throw new Error();
  }
};
const getSingleuserorderTotleDB = async (id: number) => {
  const userId = id;
  if (await usermodule.isUserExits(userId)) {
    const user = await usermodule.findOne({ userId });
    if (user) {
      let totalPrice = 0;
      if (user.orders) {
        user.orders.forEach((order) => {
          totalPrice += order.price * order.quantity;
        });
      } else {
        throw new Error();
      }
      return totalPrice;
    } else {
      throw new Error();
    }
  } else {
    throw new Error();
  }
};

export const userservise = {
  createUserDB,
  getallUserDB,
  getSingleuserDB,
  UpdateSingleUserDB,
  DeleteSingleUserDB,
  OtheraddUserDB,
  getSingleuserorderDB,
  getSingleuserorderTotleDB,
};
