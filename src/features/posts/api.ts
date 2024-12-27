// import { commentType } from "@/entities/post-commets/types/post-type";
import { jsonApiInstance } from "@/shared/lib/api-instance";
import { cardTypes } from "@/shared/types/card-types";
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
        jsonApiInstance<cardTypes>(`catalog/${id}`, {
          method: "GET",
          signal: meta.signal,
        }),
    });
  },
  // getPostComments: (id: string) => {
  //   return queryOptions({
  //     queryKey: ["comments"],
  //     queryFn: (meta) =>
  //       jsonApiInstance<commentType>(`comments?postId=${id}`, {
  //         method: "GET",
  //         signal: meta.signal,
  //       }),
  //   });
  // },
  toogleLike: (id: string, like: number) => {
    return jsonApiInstance<cardTypes>(`catalog/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: like }),
    });
  },
};
