import { IProject } from "./project.interface";
import { Project } from "./project.model";

const createProjectIntoDB = async (payload: IProject) => {
  const res = await Project.create(payload);
  return res;
};
const getAllProjectsFromDB = async () => {
  const res = await Project.find();
  return res;
};
const getSingleProjectFromDB = async (id: string) => {
  const res = await Project.findOne({ _id: id });
  return res;
};
const deleteProjectFromDB = async (id: string) => {
  const res = await Project.deleteOne({ _id: id });
  return res;
};
const updateProjectFromDB = async (id: string, payload: IProject) => {
  const res = await Project.updateOne({ _id: id }, payload, { new: true });
  return res;
};

export const projectServices = {
  createProjectIntoDB,
  getAllProjectsFromDB,
  getSingleProjectFromDB,
  deleteProjectFromDB,
  updateProjectFromDB,
};
