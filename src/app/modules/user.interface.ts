import { Model } from "mongoose";

export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  isdeleted: boolean;
};
export interface TuserModel extends Model<TUser> {
  isUserExits(userId: number): Promise<TUser | null>;
}
