import instance from "./axios";

export const getProblems = async (pageLen: number, page: number, user: string | null, filter: ("all" | "accepted" | "tried")) => {
  return instance.get<{numOfPages:number, problems: Array<ProblemRow>}>("/problems", {
    params: {
        pageLen:pageLen,
        user:user,
        page:page,
        filter:filter,
    }
  });
};

export const getProblemsByName = async (pageLen: number, page: number, user: string | null,  problemName:string) => {
  return instance.get<{numOfPages:number, problems: Array<ProblemRow>}>("/problems/search", {
    params: {
        pageLen:pageLen,
        user:user,
        page:page,
        problemName:problemName
    }
  });
};

export const getProblemById = async (id: number) => {
  return instance.get<ProblemInfo>(`/problems/${id}`);
};