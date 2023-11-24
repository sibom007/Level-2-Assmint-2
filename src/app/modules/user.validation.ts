import * as z from "zod";

const ZodUserSchema = z.object({
  userId: z.number().min(1), // Assuming userId should be a positive number
  username: z.string().max(30).min(1),
  password: z.string().max(100).min(1),
  fullName: z.object({
    firstName: z.string().max(30).min(1),
    lastName: z.string().max(30).min(1),
  }),
  age: z.number().min(1), // Assuming age should be a positive number
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: z.object({
    street: z.string().min(1),
    city: z.string().min(1),
    country: z.string().min(1),
  }),
  isdeleted: z.boolean(),
});

export default ZodUserSchema;
