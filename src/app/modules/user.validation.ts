import z from "zod";

const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const orderSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const ZodUserSchema = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  age: z.number(),
  email: z.string(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  orders: z.array(orderSchema).optional(),
  address: addressSchema,
  isdeleted: z.boolean().optional(),
});

const UpdateaddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const UpdateorderSchema = z.object({
  productName: z.string(),
  price: z.number().min(0),
  quantity: z.number().min(1),
});

export const ZodUpdateUserSchema = z.object({
  userId: z.number().optional(),
  username: z.string().min(1).optional(),
  password: z.string().min(1).optional(),
  fullName: z.object({
    firstName: z.string().min(1).optional(),
    lastName: z.string().min(1).optional(),
  }),
  age: z.number().min(1).optional(),
  email: z.string().email().optional(),
  isActive: z.boolean().optional(),
  hobbies: z.array(z.string()).optional(),
  orders: z.array(UpdateorderSchema).optional(),
  address: UpdateaddressSchema.optional(),
  isdeleted: z.boolean().optional(),
});

export default ZodUserSchema;
