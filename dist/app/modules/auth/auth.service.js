"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const user_1 = require("../user/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExists = yield (user_1.User === null || user_1.User === void 0 ? void 0 : user_1.User.findOne(payload));
    if (!isUserExists) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, "Please Login in with Right Information");
    }
    const userInfo = {
        userId: isUserExists === null || isUserExists === void 0 ? void 0 : isUserExists._id,
        userName: isUserExists === null || isUserExists === void 0 ? void 0 : isUserExists.name,
        userEmail: isUserExists === null || isUserExists === void 0 ? void 0 : isUserExists.email,
        userRole: isUserExists === null || isUserExists === void 0 ? void 0 : isUserExists.role,
    };
    const accessToken = jsonwebtoken_1.default.sign(userInfo, config_1.default.accessToken_Secret, {
        expiresIn: config_1.default.accessToken_ExpiresIn,
    });
    const refreshToken = jsonwebtoken_1.default.sign(userInfo, config_1.default.refreshToken_Secret, { expiresIn: config_1.default.refreshToken_ExpiresIn });
    return { accessToken, refreshToken };
});
exports.authService = {
    login,
};
