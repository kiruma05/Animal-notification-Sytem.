import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditUser } from "../../services/apiUsers";


export function useCreateUser() {
  const queryClient = useQueryClient();

  const { mutate: addUser, isLoading: isAdding } = useMutation({
    mutationFn: createEditUser,
    onSuccess: () => {
      toast.success("New user is added successfully");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addUser };
}
