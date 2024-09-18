import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCat } from "../../services/apiCat"; 

export function useAddCat() {
  const queryClient = useQueryClient();

  const { mutate: addCat, isLoading: isAddingCat } = useMutation({
    mutationFn: createEditCat, 
    onSuccess: () => {
      toast.success("New category successfully created");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    
    onError: (err) => toast.error(err.message),
    
  });

  return { isAddingCat, addCat };
}
