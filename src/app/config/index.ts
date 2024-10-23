import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database_url: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV,
  accessToken_Secret:process.env.ACCESS_SECRET,
  accessToken_ExpiresIn:process.env.ACCESS_EXPIRESIN,
  refreshToken_Secret:process.env.REFRESH_SECRET,
  refreshToken_ExpiresIn:process.env.REFRESH_EXPIRESIN,
};
