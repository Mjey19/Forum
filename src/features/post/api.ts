import { commentType } from "@/shared/types/comment-type";
import { jsonApiInstance } from "@/shared/lib/api-instance";
import { queryOptions } from "@tanstack/react-query";

export const postCommentsApi = {
  baseKey: "postComments",

  getPostComments: (id: string) => {
    return queryOptions({
      queryKey: [postCommentsApi.baseKey, "comments"],
      queryFn: (meta) =>
        jsonApiInstance<commentType>(`comments?postId=${id}`, {
          method: "GET",
          signal: meta.signal,
        }),
    });
  },
  createPostComment: (userComment: commentType, id: string) => {
    return jsonApiInstance<commentType>(`comments?postId=${id}`, {
      method: "POST",
      body: JSON.stringify(userComment),
    });
  },
  //   toogleLike: (id: string, like: number) => {
  //     return jsonApiInstance<cardTypes>(`catalog/${id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ likes: like }),
  //     });
  //   },
};
