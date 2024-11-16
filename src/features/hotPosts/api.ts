import { jsonApiInstance } from "@/shared/lib/api-instance";
import { cardTypes } from "@/shared/types/cardTypes";
import { queryOptions } from "@tanstack/react-query";

export const hotPostApi = {
  baseKey: "post",
  getHotPost: () => {
    return queryOptions({
      queryKey: [hotPostApi.baseKey, "hotList"],
      queryFn: (meta) =>
        jsonApiInstance<cardTypes[]>(`catalog`, {
          signal: meta.signal,
        }),
    });
  },
};
