import { jsonApiInstance } from "@/shared/lib/api-instance";
import { cardTypes } from "@/shared/types/cardTypes";
import { queryOptions } from "@tanstack/react-query";

export const postApi = {
  baseKey: "post",
  getHotPostList: () => {
    return queryOptions({
      queryKey: [postApi.baseKey, "hotList"],
      queryFn: (meta) =>
        jsonApiInstance<cardTypes[]>(`catalog`, {
          signal: meta.signal,
        }),
    });
  },
  getPost: (id: string) => {
    return queryOptions({
      queryKey: [postApi.baseKey, id],
      queryFn: (meta) =>
        jsonApiInstance<cardTypes[]>(`catalog?id=${id}`, {
          signal: meta.signal,
        }),
    });
  },
};
