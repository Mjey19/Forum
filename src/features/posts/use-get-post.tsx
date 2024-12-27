import { useQuery } from "@tanstack/react-query";
import { postApi } from "./api";
import { cardTypes } from "@/shared/types/card-types";

export function useGetPost(id: string) {
  const { data = [], isLoading } = useQuery({
    ...postApi.getPost(id),
  });
  
  return { post : data as cardTypes, isLoading };
}
