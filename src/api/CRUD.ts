import instance from "./axios";
import { NewProblem } from "../types/NewProblem";

export const createProblem = async (newProblem: NewProblem) => {
    return instance.post("/problems", newProblem);
};
  
