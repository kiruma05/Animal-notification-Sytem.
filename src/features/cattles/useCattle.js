import { useQuery } from "@tanstack/react-query";
import { getCattles } from "../../services/apiCattles";

export function useCattle() {
  const { isLoading, data: cattles, error } = useQuery({
    queryKey: ['cattles'],
    queryFn: getCattles,
  });

  return { isLoading, error, cattles }; // Return cattles here
}
