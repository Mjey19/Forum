import { useQuery } from "@tanstack/react-query";
import { hotPostApi } from "./api";

export function useHotPostList() {
  const { data: posts, isLoading } = useQuery({
    ...hotPostApi.getHotPost(),
  });
  const hotPosts = posts
    ?.sort((first, second) => second.comments - first.comments)
    .slice(0, 5);
  return { posts,hotPosts, isLoading };
}
