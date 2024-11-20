import { useQuery } from "@tanstack/react-query";
import { postApi } from "./api";

export function useGetPost(id: string) {
  const { data: post = [], isLoading } = useQuery({
    ...postApi.getPost(id),
  });
  return { post, isLoading };
}
