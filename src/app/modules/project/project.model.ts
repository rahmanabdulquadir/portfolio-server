import mongoose, { Schema } from "mongoose";
import { IProject } from "./project.interface";

const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [String],
  repoLinkClient: { type: String, required: true },
  repoLinkServer: { type: String, required: true },
  liveLink: String,
});

export const Project = mongoose.model<IProject>("Project", projectSchema);
