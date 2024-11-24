import { RootState } from "@/shared/redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { toogleLikePost } from "./like-slice";
import { postApi } from "../posts/api";
import { cardTypes } from "@/shared/types/cardTypes";

export const useToogleLike = (id: string, currLikes: number) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const likedPost = useSelector(
    (state: RootState) => state.like.posts.likedPost
  );

  const mutation = useMutation({
    mutationFn: (newLikes: number) => postApi.toogleLike(id, newLikes), // Мутация с обновлением лайков
    onMutate: async (newLikes) => {
      dispatch(toogleLikePost(id)); // Обновление состояния Redux

      // Кэширование данных перед выполнением мутации
      await queryClient.cancelQueries({ queryKey: [ id] });
      const previousPost = queryClient.getQueryData<cardTypes>([id]);

      queryClient.setQueryData([id], (old: cardTypes | undefined) => {
        if (old) {
          return { ...old, likes: newLikes }; // Обновляем только количество лайков
        }
        return old;
      });

      return { previousPost }; // Возвращаем старое состояние для отката
    },
    onError: (err, newLikes, context) => {
      // В случае ошибки откатываем данные в кэш
      if (context?.previousPost) {
        queryClient.setQueryData([id], context.previousPost);
      }
    },
    onSettled: () => {
      // Инвалидируем запрос для обновления данных из API после мутации
      queryClient.invalidateQueries({ queryKey: [ postApi.baseKey,id] });
    },
  });

  const isLiked = likedPost.includes(id);
  const toggleLike = () => {
    const newLikes = isLiked ? currLikes - 1 : currLikes + 1;
    mutation.mutate(newLikes);
  };

  return { toggleLike, isLiked };
};
