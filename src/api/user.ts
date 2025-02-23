import instance from "./axios";

export const get_AC_statistics = async (handle: string) => {
  return instance.get<{
    totalAC: number;
    recentAC: number;
    totalSubmissions: number;
  }>(`${handle}/ac-statistics`);
};
