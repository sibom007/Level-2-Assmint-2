import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  database: process.env.USER_DB,
  port: process.env.USER_PORT,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_PASSWORD,
};
