import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditUser } from "../../services/apiUsers";
import { toast } from "react-hot-toast";

export function useEditUser() {
  const queryClient = useQueryClient();

  const { mutate: editUser, isLoading: isEditing } = useMutation({
    mutationFn: ({ newUser, id }) => createEditUser(newUser, id),
    onSuccess: () => {
      toast.success("user successfully edited");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editUser };
}
