import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser as deleteUserApi } from "../../services/apiUsers";
import toast from "react-hot-toast";

export function UserDeleteUser() {
    
  
    const queryClient = useQueryClient();
  
    const { isLoading: isDeleting, mutate:deleteUser } = useMutation({
      mutationFn: deleteUserApi,
      onSuccess: () => {
        toast.success("User deleted successfully...");
        queryClient.invalidateQueries({ queryKey: ['users'] });
      },
      onError: (err) => toast.error(err.message),
    });
    return { isDeleting, deleteUser };
}