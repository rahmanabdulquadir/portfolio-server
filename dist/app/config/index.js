"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
exports.default = {
    port: process.env.PORT,
    database_url: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV,
    accessToken_Secret: process.env.ACCESS_SECRET,
    accessToken_ExpiresIn: process.env.ACCESS_EXPIRESIN,
    refreshToken_Secret: process.env.REFRESH_SECRET,
    refreshToken_ExpiresIn: process.env.REFRESH_EXPIRESIN,
};
