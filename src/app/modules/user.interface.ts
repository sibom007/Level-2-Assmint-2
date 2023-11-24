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

export type Torder = {
  productName: string;
  price: number;
  quantity: number;
};

export interface TuserModel extends Model<TUser> {
  isUserExits(userId: number): Promise<TUser | null>;
}

// export interface TuserOrderModel extends Model<Torder> {}
