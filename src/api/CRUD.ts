import instance from "./axios";
import { NewProblem } from "../types/NewProblem";

export const createProblem = async (newProblem: NewProblem) => {
    return instance.post("/create-problems", newProblem);
};
  
export const readProblem = async (handle: string) => {
    return instance.get<{ problems: ProblemsetterProblemRow[] }>(`/${handle}/read-problem`);
};

export const updateProblem = async (problemId: number, updateData: Record<string, string>) => {
    return instance.put(`/update-problem/${problemId}`, updateData);
};

export const deleteProblem = async (id: number) => {
    return instance.delete(`/delete-problem/${id}`);
};