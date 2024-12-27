import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { postCommentsApi } from "./api";
import { commentType } from "@/shared/types/comment-type";

export function useCreateComment(id: string) {
  const queryClient = useQueryClient();

  const [isLoading, setIsLoading] = useState(false);
  const mutation = useMutation({
    mutationFn: (comment: commentType) =>
      postCommentsApi.createPostComment(comment, id),
    onMutate: async (newComment) => {
      setIsLoading(true);
      await queryClient.cancelQueries({ queryKey: [postCommentsApi.baseKey] });
      const previousPost = queryClient.getQueryData<commentType>([
        postCommentsApi.baseKey,
      ]);
      queryClient.setQueryData(
        [postCommentsApi.baseKey],
        (old: commentType | undefined) => {
          if (old) {
            return { ...old, newComment };
          }
          return old;
        }
      );
      return { previousPost };
    },
    onError: (err, newLikes, context) => {
      if (context?.previousPost) {
        queryClient.setQueryData(
          [postCommentsApi.baseKey],
          context.previousPost
        );
      }
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: [postCommentsApi.baseKey],
      });
      setIsLoading(false);
    },
  });
  const handleCommentSubmit = (
    e: React.FormEvent,
    userComment: commentType,
    
  ) => {
    e.preventDefault();
    mutation.mutate(userComment);
  };

  return { handleCommentSubmit, isLoading };
}
