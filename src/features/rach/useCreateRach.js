import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditRanchy } from "../../services/apiRanchies";


export function useCreateRanch() {
  const queryClient = useQueryClient();

  const { mutate: addRanch, isLoading: isAdding } = useMutation({
    mutationFn: createEditRanchy,
    onSuccess: () => {
      toast.success("New ranch is added successfully");
      queryClient.invalidateQueries({ queryKey: ["ranchies"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addRanch };
}
//export default useCreateRanch;