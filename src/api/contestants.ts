import instance from "./axios";

export const getSubmissionActivity = async (handle: string, from: string, to: string) => {
  return instance.get<Array<SubmissionActivity>>(`/contestant/${handle}/activity`, {
    params: {
        from: from,
        to: to,
    }
  })
};

export const getContestantsForFriendsPage = async (pageLen: number, page: number, user: string, filter: ("all" | "friends")) => {
  return instance.get<{numOfPages:number, contestants: Array<ContestantInfoRow>}>(`/contestants`, {
    params: {
        pageLen:pageLen,
        user:user,
        page:page,
        filter:filter,
    }
  })
};

export const searchContestantsForFriendsPage = async (pageLen: number, page: number, user: string, handle: string) => {
  return instance.get<{numOfPages:number, contestants: Array<ContestantInfoRow>}>(`/contestants/search`, {
    params: {
        pageLen:pageLen,
        user:user,
        page:page,
        handle:handle,
    }
  })
};