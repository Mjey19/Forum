import { jsonApiInstance } from "@/shared/lib/api-instance";
import { cardTypes } from "@/shared/types/cardTypes";
import { queryOptions } from "@tanstack/react-query";

export const threadsListApi = {
  baseKey: "threads",
  getThreadsList: () => {
    return queryOptions({
      queryKey: [threadsListApi.baseKey, "list"],
      queryFn: (meta) =>
        jsonApiInstance<cardTypes[]>(`catalog`, {
          signal: meta.signal,
        }),
    });
  },
};
