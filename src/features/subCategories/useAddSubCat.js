import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditSubCat } from "../../services/apiSubCat"; 

export function useAddSubCat() {
  const queryClient = useQueryClient();

  const { mutate: addSubCat, isLoading: isAddingSubCat } = useMutation({
    mutationFn: createEditSubCat, 
    onSuccess: () => {
      toast.success("New Sub Category successfully created");
      queryClient.invalidateQueries({ queryKey: ["SubCategories"] });
    },
    
    onError: (err) => toast.error(err.message),
    
  });

  return { isAddingSubCat, addSubCat };
}
