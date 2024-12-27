import { jsonApiInstance } from "@/shared/lib/api-instance";
import { cardTypes } from "@/shared/types/card-types";
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
