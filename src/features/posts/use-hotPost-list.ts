import { useQuery } from "@tanstack/react-query";
import { postApi } from "./api";

export function useHotPostList() {
  const { data: posts, isLoading } = useQuery({
    ...postApi.getHotPostList(),
  });
  const hotPosts = posts
    ?.sort((first, second) => second.comments - first.comments)
    .slice(0, 5);
  return { posts,hotPosts, isLoading };
}
