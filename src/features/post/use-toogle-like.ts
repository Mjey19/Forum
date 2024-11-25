import { RootState } from "@/shared/redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { toogleLikePost } from "./like-slice";
import { postApi } from "../posts/api";
import { cardTypes } from "@/shared/types/cardTypes";
import { useState } from "react";

export const useToogleLike = (id: string, currLikes: number) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const likedPost = useSelector(
    (state: RootState) => state.like.posts.likedPost
  );

  const mutation = useMutation({
    mutationFn: (newLikes: number) => postApi.toogleLike(id, newLikes),
    onMutate: async (newLikes) => {
      setIsLoading(true);
      dispatch(toogleLikePost(id));

      await queryClient.cancelQueries({ queryKey: [id] });
      const previousPost = queryClient.getQueryData<cardTypes>([id]);

      queryClient.setQueryData([id], (old: cardTypes | undefined) => {
        if (old) {
          return { ...old, likes: newLikes };
        }
        return old;
      });

      return { previousPost };
    },
    onError: (err, newLikes, context) => {
      if (context?.previousPost) {
        queryClient.setQueryData([id], context.previousPost);
      }
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: [postApi.baseKey, id] });
      setIsLoading(false);
    },
  });

  const isLiked = likedPost.includes(id);
  const toggleLike = () => {
    const newLikes = isLiked ? currLikes - 1 : currLikes + 1;
    mutation.mutate(newLikes);
  };

  return { toggleLike, isLiked, isLoading };
};
