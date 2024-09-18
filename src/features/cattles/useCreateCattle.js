import { useMutation } from "@tanstack/react-query";
import { createEditCattle } from '../../services/apiCattles';
import { toast } from 'react-hot-toast';

const useCreateCattle = () => {
  return useMutation({
    mutationFn: async (newCattle) => {
      try {
        const data = await createEditCattle(newCattle);
        toast.success('Cattle created successfully');
        return data;
      } catch (error) {
        toast.error('Error creating cattle');
        throw error;
      }
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });
};

export default useCreateCattle;
