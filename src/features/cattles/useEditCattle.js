// src/features/cattles/useEditCattle.js
import { useMutation } from "@tanstack/react-query";
import { createEditCattle } from '../../services/apiCattles';
import { toast } from 'react-hot-toast';

const useEditCattle = () => {
  return useMutation({
    mutationFn: async ({ newCattle, id }) => {
      try {
        const data = await createEditCattle(newCattle, id);
        toast.success('Cattle updated successfully');
        return data;
      } catch (error) {
        toast.error('Error updating cattle');
        throw error;
      }
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });
};

export default useEditCattle;
