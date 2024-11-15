import { useQuery } from "@tanstack/react-query";
import { threadsListApi } from "./api";

export function useThreadsList() {
  const { data: threadsItems, isLoading } = useQuery({
    ...threadsListApi.getThreadsList(),
    refetchInterval: 1000 * 60,
  });
  const filterData = threadsItems
    ?.sort((first, second) => second.comments - first.comments)
    .slice(0, 5);
  return { filterData, isLoading };
}
