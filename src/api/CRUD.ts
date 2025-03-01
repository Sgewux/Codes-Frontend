import instance from "./axios";
import { NewProblem } from "../types/NewProblem";

export const createProblem = async (newProblem: NewProblem) => {
    return instance.post("/problems/problemsetter/", newProblem);
};

export const readProblem = async (handle: string) => {
    return instance.get<{ problems: ProblemsetterProblemRow[] }>(`/problems/problemsetter/${handle}`);
};

export const updateProblem = async (problemId: number, updateData: Record<string, string>) => {
    return instance.put(`/problems/problemsetter/${problemId}`, updateData);
};

export const deleteProblem = async (id: number) => {
    return instance.delete(`/problems/problemsetter/${id}`);
};