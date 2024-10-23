import { model, Schema } from "mongoose";
import { ISkill } from "./skill.interface";

const skillSchema = new Schema<ISkill>(
  {
    name: { type: String, required: true, unique:true },
    estimate: { type: Number, required: true },
  
  },
  {timestamps: true }
);

export const Skill = model<ISkill>("Skill", skillSchema);