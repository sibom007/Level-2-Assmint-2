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

// const OtheraddUserDB = async function (userId: number, order: object) {
//   if (await usermodule.isUserExits(userId)) {
//     try {
//       const user = await usermodule.findOne({ userId });
//       if (user) {
//         if (user.orders) {
//           const result = await usermodule.updateOne(
//             { userId },
//             { $push: { orders: order } }
//           );
//           return result;
//         } else {
//           const result = await usermodule.updateOne(
//             { userId },
//             {
//               $set: {
//                 orders: [order],
//               },
//             },
//             { upsert: true }
//           );
//           console.log(result, "heool");
//           return result;
//         }
//       }
//     } catch (error) {
//       console.error("Error adding order:", error);
//     }

//     // try {
//     //   const user = await usermodule.findOne({ userId });
//     //   console.log(order);
//     //   if (user) {
//     //     const updateQuery = user.orders
//     //       ? { $push: { orders: order } }
//     //       : { $set: { orders: [order] } };

//     //     const result = await usermodule.updateOne(
//     //       { userId },
//     //       { $set: updateQuery },
//     //       { upsert: true }
//     //     );

//     //     console.log(result, "hello");
//     //     return result;
//     //   }
//     // } catch (error) {
//     //   console.error("Error adding order:", error);
//     // }
//   } else {
//     throw new Error();
//   }
// };

export const userservise = {
  createUserDB,
  getallUserDB,
  getSingleuserDB,
  UpdateSingleUserDB,
  DeleteSingleUserDB,
  // OtheraddUserDB,
};
