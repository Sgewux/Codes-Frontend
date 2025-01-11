import SubmissionActivity from "../types/SubmissionActivity";
import instance from "./axios";

export const getSubmissionActivity = async (handle: string, from: string, to: string) => {
    return instance.get<Array<SubmissionActivity>>(`/contestant/${handle}/activity`, {
        params: {
            "from": from,
            "to": to,
        }
    })
};