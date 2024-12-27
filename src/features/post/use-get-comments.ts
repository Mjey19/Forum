import { useQuery } from "@tanstack/react-query";
import { commentType } from "@/shared/types/comment-type";
import { postCommentsApi } from "./api";

export function useGetComments(id: string) {
  const { data = [], isLoading } = useQuery({
    ...postCommentsApi.getPostComments(id),
  });

  return { comments: data as commentType[], isLoading };
}
