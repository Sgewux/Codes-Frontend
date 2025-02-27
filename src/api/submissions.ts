import instance from "./axios";

export const getSubmission = async (id: number) => {
  return instance.get<SubmissionDetail>(`/submissions/${id}`);
};