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
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectServices = void 0;
const project_model_1 = require("./project.model");
const createProjectIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield project_model_1.Project.create(payload);
    return res;
});
const getAllProjectsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield project_model_1.Project.find();
    return res;
});
const getSingleProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield project_model_1.Project.findOne({ _id: id });
    return res;
});
const deleteProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield project_model_1.Project.deleteOne({ _id: id });
    return res;
});
const updateProjectFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield project_model_1.Project.updateOne({ _id: id }, payload, { new: true });
    return res;
});
exports.projectServices = {
    createProjectIntoDB,
    getAllProjectsFromDB,
    getSingleProjectFromDB,
    deleteProjectFromDB,
    updateProjectFromDB,
};
