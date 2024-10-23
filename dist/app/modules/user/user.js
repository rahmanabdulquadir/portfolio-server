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
exports.seed = exports.User = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const mongoose_1 = require("mongoose");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const http_status_codes_1 = require("http-status-codes");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
}, { timestamps: true });
const UserData = {
    name: "Rahman Abdul Quadir",
    email: "rahman@gmail.com",
    role: "Admin",
    password: "rahman123",
};
exports.User = (0, mongoose_1.model)("User", userSchema);
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isUserExists = yield (exports.User === null || exports.User === void 0 ? void 0 : exports.User.findOne(UserData));
        if (!isUserExists) {
            yield (exports.User === null || exports.User === void 0 ? void 0 : exports.User.create(UserData));
        }
    }
    catch (error) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.FORBIDDEN, error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.seed = seed;
